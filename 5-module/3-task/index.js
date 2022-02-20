function initCarousel() {
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let sliderItem = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');
  let itemOffset = sliderItem.offsetWidth;
  let sliderArr = slides.length;
  let slideIndex = 0;

  buttonLeft.style.display = 'none';

  buttonRight.addEventListener('click', function changeItemRight() {
    if (slideIndex < sliderArr - 1) {
      buttonLeft.style.display = '';
      slideIndex++;
    }
    if (slideIndex === sliderArr - 1) {
      buttonRight.style.display = 'none';
    }
    sliderItem.style.transform = 'translateX(-' + itemOffset * slideIndex + 'px)';
  });

  buttonLeft.addEventListener('click', function changeItemLeft() {
    if (slideIndex > 0) {
      buttonRight.style.display = '';
      slideIndex--;
    }
    if (slideIndex === 0) {
      buttonLeft.style.display = 'none';
    }
    sliderItem.style.transform = 'translateX(-' + itemOffset * slideIndex + 'px)';
  });
}


