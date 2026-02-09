const images = document.querySelectorAll(".animationimg img");
const gallery = document.querySelector(".familygallery");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); 
      }
    });
  },
  {
    threshold: 0.4 
  }
);

images.forEach(img => observer.observe(img));
const observerGallery = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {
      // only trigger when it comes into view
      if (entry.isIntersecting) {
        // remove first to restart animation
        entry.target.classList.remove("show");

        // small timeout to force reflow so animation restarts
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 50); // 50ms is enough
      }
    });
  },
  {
    threshold: 0.3
  }
);
observerGallery.observe(gallery);