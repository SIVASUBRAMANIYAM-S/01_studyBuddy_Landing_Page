import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power2.out';
const DESKTOP = '(min-width: 1024px)';
const MOBILE = '(max-width: 1023.98px)';

// Plays `fn` once when `el`'s top crosses `fraction` of the viewport. If the visitor is already
// at or past that point when this runs (GSAP loads after idle, or they arrived via an anchor),
// play straight away instead of waiting for a scroll that may never come.
function whenReached(el: Element, fraction: number, fn: () => void) {
  if (el.getBoundingClientRect().top < window.innerHeight * fraction) {
    fn();
    return;
  }
  ScrollTrigger.create({ trigger: el, start: `top ${fraction * 100}%`, once: true, onEnter: fn });
}

function heroTilt() {
  const el = document.querySelector<HTMLElement>('[data-tilt]');
  const hero = el?.closest('section');
  if (!el || !hero) return;

  const mm = gsap.matchMedia();
  mm.add({ desktop: DESKTOP, mobile: MOBILE }, (ctx) => {
    // Matches the CSS starting tilt in global.css, so taking over is seamless.
    const tilt = ctx.conditions!.desktop ? { rotateX: 6, rotateY: -10 } : { rotateX: 5, rotateY: 0 };
    gsap.set(el, { transformPerspective: 1400, transformOrigin: '50% 100%', ...tilt });
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 35%', scrub: 0.4 },
    });
  });
}

function heroParallax() {
  const img = document.querySelector<HTMLElement>('[data-parallax] img');
  const hero = img?.closest('section');
  if (!img || !hero) return;

  const mm = gsap.matchMedia();
  mm.add({ desktop: DESKTOP, mobile: MOBILE }, (ctx) => {
    gsap.fromTo(
      img,
      { y: 0, scale: 1.08 },
      {
        y: ctx.conditions!.desktop ? -40 : -24,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      },
    );
  });
}

function progressBar() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (!bar) return;
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } },
  );
}

function headingWords() {
  const headings = gsap.utils.toArray<HTMLElement>('main section h2.text-h2, main section h2.text-h1');
  headings.forEach((h) => {
    if (h.childElementCount > 0 || h.closest('[aria-hidden="true"]')) return;
    const text = (h.textContent ?? '').trim().replace(/\s+/g, ' ');
    if (!text) return;

    h.setAttribute('aria-label', text);
    const frag = document.createDocumentFragment();
    const inners: HTMLElement[] = [];
    text.split(' ').forEach((word, i) => {
      if (i > 0) frag.append(' ');
      const outer = document.createElement('span');
      outer.className = 'hword';
      outer.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'hword-in';
      inner.textContent = word;
      outer.append(inner);
      frag.append(outer);
      inners.push(inner);
    });
    h.replaceChildren(frag);

    gsap.set(inners, { yPercent: 105 });
    whenReached(h, 0.88, () =>
      gsap.to(inners, { yPercent: 0, duration: 0.6, ease: 'power3.out', stagger: 0.045 }),
    );
  });
}

function journeyLine() {
  const list = document.querySelector('[data-journey]');
  const segments = gsap.utils.toArray<HTMLElement>('[data-journey-segment]');
  if (!list || !segments.length) return;

  const mm = gsap.matchMedia();
  mm.add({ desktop: DESKTOP, mobile: MOBILE }, (ctx) => {
    const axis = ctx.conditions!.desktop ? 'scaleX' : 'scaleY';
    gsap.set(segments, { [axis]: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: 'top 85%',
        end: ctx.conditions!.desktop ? 'top 40%' : 'bottom 75%',
        scrub: 0.5,
      },
    });
    segments.forEach((s) => tl.to(s, { [axis]: 1, ease: 'none', duration: 1 }));
  });
}

function answerSheet() {
  const fig = document.querySelector<HTMLElement>('figure.answer');
  if (!fig) return;
  const okRows = fig.querySelectorAll('[data-row="ok"]');
  const mistakeRows = gsap.utils.toArray<HTMLElement>(fig.querySelectorAll('[data-row="mistake"]'));
  const marks = gsap.utils.toArray<HTMLElement>(fig.querySelectorAll('[data-mark]'));
  const sweeps = gsap.utils.toArray<HTMLElement>(fig.querySelectorAll('[data-sweep]'));
  const score = fig.querySelector('[data-score]');

  const markPaths = marks.flatMap((m) => Array.from(m.querySelectorAll('path')));
  markPaths.forEach((p) => p.setAttribute('pathLength', '1'));

  gsap.set([okRows, mistakeRows], { autoAlpha: 0, x: 12 });
  gsap.set(sweeps, { scaleX: 0 });
  gsap.set(markPaths, { strokeDasharray: 1, strokeDashoffset: 1 });
  gsap.set(score, { autoAlpha: 0 });

  const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
  tl.to(okRows, { autoAlpha: 1, x: 0, duration: 0.4 });
  mistakeRows.forEach((row, i) => {
    tl.to(sweeps[i], { scaleX: 1, duration: 0.35 }, '>+0.25')
      .to(marks[i].querySelectorAll('path'), { strokeDashoffset: 0, duration: 0.25, stagger: 0.1 }, '<0.1')
      .to(row, { autoAlpha: 1, x: 0, duration: 0.4 }, '<0.1');
  });
  tl.to(score, { autoAlpha: 1, duration: 0.3 }, '>+0.15');

  whenReached(fig, 0.85, () => tl.play());
}

function countUp() {
  const block = document.querySelector('[data-counters]');
  const counters = gsap.utils.toArray<HTMLElement>('[data-count]');
  if (!block || !counters.length) return;

  const format = (n: number) => Math.round(n).toLocaleString('en-IN');
  const start = () =>
    counters.forEach((el) => {
      const target = Number(el.dataset.count);
      const state = { v: 0 };
      gsap.to(state, {
        v: target,
        duration: 1.4,
        ease: 'power3.out',
        onUpdate: () => (el.textContent = format(state.v)),
      });
    });

  // Already in view (or scrolled past) when GSAP arrives: count from 0 right away rather than
  // leaving the final figures static.
  counters.forEach((el) => (el.textContent = '0'));
  whenReached(block, 0.85, start);
}

export function initMotion() {
  progressBar();
  heroTilt();
  heroParallax();
  headingWords();
  journeyLine();
  answerSheet();
  countUp();
  // Fonts or the late-loading hero image can shift trigger positions slightly.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
