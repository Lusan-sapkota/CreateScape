document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('#carouselCaptions');
    if (carouselElement) {
      var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
      });
    }
  });

