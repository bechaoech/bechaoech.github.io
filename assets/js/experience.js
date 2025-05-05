AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "University of Economics Ho Chi Minh City (UEH)",
    cardImage: "assets/images/experience-page/uehlogo.png",
    place: "Bachelor's degree in Business Administration",
    time: "(Oct, 2020 - Dec, 2023)",
    desp: `
  <p class="desp-center">Quality Management | 2020 - 2023</p>
  <p class="desp-left" style="font-size: 1rem;">
    <br> 🎓 After graduating from high school, I got into UEH. In the second semester of my freshman year, I met him — the one who later became my husband. Meeting him was a turning point I never saw coming. From that moment on, the way I thought and looked at life slowly started to change — and little by little, it shaped the me I am today 💗.
  </p>
`,

  },
  // {
  //   title: "Student Developer",
  //   cardImage: "assets/images/experience-page/gsoc.png",
  //   place: "Google Summer Of Code",
  //   time: "(Mar - Aug, 2019)",
  //   desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  // },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
  <span class="pre-heading">${place}</span>
</p>
<div class="desp">
  ${desp}
</div>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Him",
    cardImage: "assets/images/experience-page/him.jpg",
    description:
      "He is the one I always turn to — a steady anchor, a quiet yet unwavering companion, even when our shared journey faces hardships or when I lose my sense of direction. From the smallest choices in daily life to the most pivotal crossroads, he listens, he understands, and he walks beside me — without noise, but with a quiet depth of understanding.",
  },
  {
    title: "Home",
    cardImage: "assets/images/experience-page/home.jpg",
    description:
      "No matter where we are, as long as we’re together, that place is home. This little family is my anchor — the strength that helps me step out into the world, and the haven I always long to return to.",
  },
  {
    title: "Heart",
    cardImage: "assets/images/experience-page/heart.jpg",
    description:
      "I believe in living kindly and doing everything with heart and sincerity. That’s the compass that guides me — helping me recognize what to hold on to, what to let go of, what to pursue, and what to walk away from. I’m learning to listen to my heart more — because I used to rely entirely on logic. But I’ve come to realize that life isn’t just a matter of right or wrong. It’s about learning to listen to yourself a little more each day.",
  },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "🎹 Music",
    subtitle: "Music is the language of the soul",
    image: "assets/images/experience-page/music.png",
    desp: "I enjoy listening to music, playing instruments, and singing. Gentle, emotional melodies — sometimes tinged with sadness — always move me deeply. With music, I don’t need anything fancy. As long as it’s music, I can lose myself in it completely.",
    href: "https://www.youtube.com/@tammiehuynh_",
  },
  {
    title: "📖 Reading",
    subtitle: "Every book is a door to another world",
    image: "assets/images/experience-page/reading.png",
    desp: "Each book is a door to another world — and sometimes, a door back to myself. I often read after finishing something that took a long time — as a way to rest and recover. In those moments, I feel like I have enough space, enough stillness to truly absorb each word and lose myself in it, slowly and fully.",
    href: "https://ulhacks.com/",
  },
  {
    title: " 📝 Lifelong Learning",
    subtitle: "Grateful for every new lesson",
    image: "assets/images/experience-page/lifelonglearning.png",
    desp: "Life is a never-ending journey of learning. When we die, we can’t take our possessions with us — only the experiences we've lived and the lessons we've learned. I'm grateful that I still get to learn each day, whether it's a new language or just a small insight from everyday life.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "🎬 Movies & Series",
    subtitle: "Living a thousand lives through stories",
    image: "assets/images/experience-page/movies.png",
    desp: "I love films just as much as I love music. To truly feel a movie, I don’t just watch it with my eyes — I immerse myself in each character. Every scene holds dozens of intertwined stories, and through them, I get to live dozens of different lives.",
    href: "https://elevatetech.codes/",
  },
  // {
  //   title: "PitchTeen",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/pitchteen.png",
  //   desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  //   href: "https://www.linkedin.com/company/pitchteen/about/",
  // },
  // {
  //   title: "Hack-A-Solution",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hackasolution.png",
  //   desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  //   href: "https://hackasolution.devpost.com/",
  // },
  // {
  //   title: "UniGlobe Hacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/uniglobe.png",
  //   desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  //   href: "https://uniglobe-hacks.devpost.com/",
  // },
  // {
  //   title: "AtlasHacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/atlas.png",
  //   desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  //   href: "https://atlashacks2.devpost.com/",
  // },
  // {
  //   title: "NeoHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/neo.png",
  //   desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  //   href: "https://neohacks.org/",
  // },
  // {
  //   title: "Mission Inspired",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/mission.png",
  //   desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  //   href: "https://www.missioninspired.org/hackathon",
  // },
  // {
  //   title: "Hack3",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/hack3.png",
  //   desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  //   href: "https://hack3.co/",
  // },
  // {
  //   title: "JITHack",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/jithack.png",
  //   desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  //   href: "https://jithack.netlify.app/",
  // },
  // {
  //   title: "Recess Hacks",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/recess.png",
  //   desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  //   href: "https://recesshacks.com/",
  // },
  // {
  //   title: "Citro Tech",
  //   subtitle: "Mentor",
  //   image: "assets/images/experience-page/citro.png",
  //   desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  //   href: "https://citro.tech/",
  // },
  // {
  //   title: "NHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/nhacks.png",
  //   desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  //   href: "https://nhacks-vi.devpost.com/",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
