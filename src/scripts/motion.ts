import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power2.out';

function heroTilt() {
  const el = document.querySelector<HTMLElement>('[data-tilt]');
  const hero = el?.closest('section');
  if (!el || !hero) return;

  const mm = gsap.matchMedia();
  mm.add({ desktop: '(min-width: 1024px)', mobile: '(max-width: 1023.98px)' }, (ctx) => {
    const tilt = ctx.conditions!.desktop ? { rotateX: 7, rotateY: -10 } : { rotateX: 6, rotateY: 0 };
    gsap.set(el, { transformPerspective: 1400, transformOrigin: '50% 100%' });
    gsap
      .timeline()
      .fromTo(el, { rotateX: 0, rotateY: 0 }, { ...tilt, duration: 0.6, ease: EASE })
      .add(() => {
        gsap.fromTo(
          el,
          tilt,
          {
            rotateX: 0,
            rotateY: 0,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 35%', scrub: 0.4 },
          },
        );
      });
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
  tl.to(okRows, { autoAlpha: 1, x: 0, duration: 0.35 });
  mistakeRows.forEach((row, i) => {
    const at = `>+0.15`;
    tl.to(sweeps[i], { scaleX: 1, duration: 0.3 }, at)
      .to(marks[i].querySelectorAll('path'), { strokeDashoffset: 0, duration: 0.2, stagger: 0.08 }, '<0.1')
      .to(row, { autoAlpha: 1, x: 0, duration: 0.35 }, '<0.1');
  });
  tl.to(score, { autoAlpha: 1, duration: 0.25 }, '>+0.1');

  ScrollTrigger.create({ trigger: fig, start: 'top 70%', once: true, onEnter: () => tl.play() });
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
        duration: 0.6,
        ease: EASE,
        onUpdate: () => (el.textContent = format(state.v)),
      });
    });

  if (block.getBoundingClientRect().top > window.innerHeight * 0.8) {
    counters.forEach((el) => (el.textContent = '0'));
  }
  ScrollTrigger.create({ trigger: block, start: 'top 80%', once: true, onEnter: start });
}

export function initMotion() {
  heroTilt();
  answerSheet();
  countUp();
}
