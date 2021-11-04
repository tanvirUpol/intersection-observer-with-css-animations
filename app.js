// intersection observer

const images = document.querySelectorAll('.obj');

observer = new IntersectionObserver((entries) => {
  console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      if (entry.target.classList.contains('left-image')) {
        entry.target.classList.add('animate-left');
      }
      if (entry.target.classList.contains('right-image')) {
        entry.target.classList.add('animate-right');
      }
      return;
    }
    entry.target.classList.remove('animate-left');
    entry.target.classList.remove('animate-right');
  });
});
images.forEach((image) => {
  observer.observe(image);
});
