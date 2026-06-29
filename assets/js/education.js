AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:
      "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
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