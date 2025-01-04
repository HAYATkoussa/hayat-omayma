

// Initialize slider
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

// Next slide
nextButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
});

// Previous slide
prevButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  });
});

// Auto-play (optional)
setInterval(() => {
  nextButton.click();
}, 5000); // 5 seconds
