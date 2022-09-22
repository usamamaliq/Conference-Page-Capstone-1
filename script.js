const speakersInfo = [
    {
      gridClass: 'fs1',
      name: 'Imran Khan',
      profession: "Ex-Prime Minister of Pakistan, Ex-Cricketer",
      image: './assets/imran-khan.jpg',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
    },

    {
        gridClass: 'fs2',
        name: 'Zaffar Abbas JDC',
        profession: "General Secretary of JDC",
        image: './assets/zaffar-abbas.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
      },

      {
        gridClass: 'fs3',
        name: 'Dr Amjad Saqib',
        profession: "Founder of Akhuwat Foundation",
        image: './assets/amjad-saqib.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
      },

      {
        gridClass: 'fs4',
        name: 'Shahid Afridi',
        profession: "Founder of SA Foundation, Ex-Cricketer",
        image: './assets/shahid-afridi.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
      },

      {
        gridClass: 'fs5',
        name: 'Faisal Eidhi',
        profession: "Director Eidhi Foundation",
        image: './assets/faisal-eidhi.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
      },

      {
        gridClass: 'fs6',
        name: 'Dr. Muhammad Ramzan Chhipa',
        profession: "Founder of Chhipa Welfare Association",
        image: './assets/ramzan-chhipa.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi explicabo enim libero rem, vi',
      }
];

const featuredSpeakers = document.querySelector('.featured-speakers');
var speakerInfoSize=2;
// Function for media Query listener
function myFunction(x) {
  if (x.matches) { // If media query matches
    featuredSpeakers.innerHTML = `<div class="fs-title-cont">
          <h2 class="black fs-title">
            Featured Speakers
          </h2>
          <hr class=" fs-hline">
        </div>`;
  
    for (let i = 0; i < speakerInfoSize; i += 1) {
            featuredSpeakers.innerHTML += `
              <div class="fs-cont ${speakersInfo[i].gridClass}">
                  <div class="fs-img-cont">
                    <img class="fs-img" src="${speakersInfo[i].image}" alt="Picture of speaker">
                  </div>
                  <div class="fs-detail">
                    <h2 class="black fs-name">
                    ${speakersInfo[i].name}
                    </h2>
                    <h3 class="orange fs-profession">
                    ${speakersInfo[i].profession}
                    </h3>
                    <div class="hr">
                    <hr class="fs-hline-speaker">
                    </div>
                    <p class="black fs-detail">
                    ${speakersInfo[i].detail}
                    </p>
                  </div>
                </div>
              `;
          }
  } else {
    for (let i = 0; i < speakersInfo.length ; i += 1) {
      featuredSpeakers.innerHTML += `
        <div class="fs-cont ${speakersInfo[i].gridClass}">
            <div class="fs-img-cont">
              <img class="fs-img" src="${speakersInfo[i].image}" alt="Picture of speaker">
            </div>
            <div class="fs-detail">
              <h2 class="black fs-name">
              ${speakersInfo[i].name}
              </h2>
              <h3 class="orange fs-profession">
              ${speakersInfo[i].profession}
              </h3>
              <div class="hr">
              <hr class="fs-hline-speaker">
              </div>
              <p class="black fs-detail">
              ${speakersInfo[i].detail}
              </p>
            </div>
          </div>
        `;
    }
  }
}

const seeMoreBtn= document.querySelector('.see-more-btn1');
function seeMore() {
  speakerInfoSize= speakersInfo.length;
  seeMoreBtn.style.display='none';
  myFunction(x);
}

var x = window.matchMedia("(max-width: 767px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

