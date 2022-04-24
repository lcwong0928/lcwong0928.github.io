AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Teaching Assistant",
    cardImage: "assets/images/experience-page/mit.png",
    place: "Massachusetts Institute of Technology",
    time: "(Sep 2021 – Present)",
    desp: "<li>Assist faculty with teaching the graduate course: Modeling with Machine Learning.</li> <li>Assist faculty with teaching the graduate course: Statistics, Computation, and Applications.</li> <li>Lead weekly recitations, guide students in course projects, and grade problem sets.</li>",
  },
  {
    title: "Machine Learning Engineer",
    cardImage: "assets/images/experience-page/evicore.png",
    place: "eviCore Healthcare - InQbator",
    time: "(July 2020 – Aug 2021)",
    desp: "<li>Designed and implemented an extendable architecture to deploy machine learning models with continuous integration/delivery (CI/CD) to the Microsoft Azure platform.</li> <li>Developed a scalable infrastructure to route requests from Kafka streaming platform to appropriate model endpoints and log telemetry to Application Insights.</li><li>Improve healthcare services by identifying problem areas and proposing innovative solutions.</li>",
  },
  {
    title: "Data Scientist Extern",
    cardImage: "assets/images/experience-page/evicore.png",
    place: "eviCore Healthcare - InQbator",
    time: "(Jan 2020 – Feb 2020)",
    desp: "<li>Designed and implemented a time series model to forecast patient case volume based on autoregressive models like SARIMAX and Facebook’s Prophet.</li><li>Finetuned existing models using features from healthcare datasets in SQL databases.</li> <li>Increased the efficiency of medical code queries by using the interval tree data structure.</li>",
  },
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
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
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
    title: "Orion",
    cardImage: "assets/images/experience-page/orion.png",
    description:
      "A machine learning library for detecting anomalies in signals.",
  },
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
