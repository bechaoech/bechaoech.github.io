AOS.init();

/* Home Flavors category filters */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".hf-filter-btn");
  const flavorCards = document.querySelectorAll(
    "#home-flavors-cards .hf-card"
  );

  filterButtons.forEach(function (button) {
    button.setAttribute(
      "aria-pressed",
      button.classList.contains("active")
    );

    button.addEventListener("click", function () {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach(function (currentButton) {
        const isActive = currentButton === button;

        currentButton.classList.toggle("active", isActive);
        currentButton.setAttribute("aria-pressed", isActive);
      });

      flavorCards.forEach(function (card) {
        const shouldShow =
          selectedCategory === "all" ||
          card.dataset.category === selectedCategory;

        card.style.display = shouldShow ? "" : "none";
      });

      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    });
  });
});
/* Home Flavors image sliders */
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".hf-slider");

  sliders.forEach(function (slider) {
    const slides = slider.querySelectorAll(".hf-slide");
    const dots = slider.querySelectorAll(".hf-slider-dot");
    const previousButton = slider.querySelector(".hf-slider-prev");
    const nextButton = slider.querySelector(".hf-slider-next");

    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let didSwipe = false;

   function showSlide(index) {
  const lastIndex = slides.length - 1;

  currentIndex = Math.max(0, Math.min(index, lastIndex));

  slides.forEach(function (slide, slideIndex) {
    const isActive = slideIndex === currentIndex;

    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", !isActive);
  });

  dots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === currentIndex);
  });

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === lastIndex;

  previousButton.classList.toggle("is-hidden", isFirstSlide);
  nextButton.classList.toggle("is-hidden", isLastSlide);

  previousButton.disabled = isFirstSlide;
  nextButton.disabled = isLastSlide;
}

    previousButton.addEventListener("click", function (event) {
      event.stopPropagation();
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", function (event) {
      event.stopPropagation();
      showSlide(currentIndex + 1);
    });

    slider.addEventListener(
      "touchstart",
      function (event) {
        touchStartX = event.changedTouches[0].clientX;
        touchEndX = touchStartX;
        didSwipe = false;
      },
      { passive: true }
    );

    slider.addEventListener(
      "touchmove",
      function (event) {
        touchEndX = event.changedTouches[0].clientX;

        if (Math.abs(touchStartX - touchEndX) > 10) {
          didSwipe = true;
        }
      },
      { passive: true }
    );

    slider.addEventListener(
      "touchend",
      function () {
        const swipeDistance = touchStartX - touchEndX;

        if (Math.abs(swipeDistance) > 50) {
          if (swipeDistance > 0) {
            showSlide(currentIndex + 1);
          } else {
            showSlide(currentIndex - 1);
          }
        }

        setTimeout(function () {
          didSwipe = false;
        }, 300);
      },
      { passive: true }
    );

    slider.addEventListener(
      "click",
      function (event) {
        if (didSwipe && event.target.classList.contains("hf-slide")) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );

    showSlide(0);
  });
});