// Advanced Scroll-triggered Parallax Effects
let parallaxElements = document.querySelectorAll('.text-hover');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  parallaxElements.forEach((el) => {
    let depth = el.getAttribute('data-depth');
    let translateValue = scrollPosition * depth;
    el.style.transform = `translateY(${translateValue}px)`;
  });
});
