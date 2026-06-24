// Tilt the logo toward the cursor like a hover card. Sets --rx/--ry on the
// element; the transform lives in CSS. Respects reduced-motion.
const logo = document.querySelector('.logo');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

if (logo && !reduce.matches) {
  const MAX = 12; // max tilt in degrees

  logo.addEventListener('pointermove', (e) => {
    const r = logo.getBoundingClientRect();
    // -0.5..0.5 across the element, from its center
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    // tilt away from cursor: top edge tips back, right edge tips toward
    logo.style.setProperty('--ry', `${px * MAX * 2}deg`);
    logo.style.setProperty('--rx', `${-py * MAX * 2}deg`);
  });

  const reset = () => {
    logo.style.setProperty('--rx', '0deg');
    logo.style.setProperty('--ry', '0deg');
  };
  logo.addEventListener('pointerleave', reset);
  logo.addEventListener('blur', reset);
}
