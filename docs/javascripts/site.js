// Dot grid drifts slightly slower than the page. Works with instant navigation.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var ticking = false;
  function update() {
    ticking = false;
    document.documentElement.style.setProperty('--dot-shift', (-(window.scrollY * 0.12) % 28) + 'px');
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
