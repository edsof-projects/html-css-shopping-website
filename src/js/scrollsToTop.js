export function scrollToTop(duration) {
  const start     = window.scrollY;
  const startTime = performance.now();

  function animar(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // de 0 a 1

    // easing suave
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(animar);
    }
  }

  requestAnimationFrame(animar);
}
