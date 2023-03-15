const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#nav');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
  nav.classList.toggle('open');
});

/* pop-up window */

const mainProject = {
  headerTitle: 'Multi-Post Stories',
  headerImg: 'images/image1.png',
  headerDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  headerLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
  liveLink: 'https://mikey1-nuel.github.io/Setup-and-Mobile-First/',
  projectLink: 'https://github.com/Mikey1-nuel/Setup-and-Mobile-First',
};

const headerTitle = document.querySelector('.header1');
const headerImg = document.querySelector('.image1');
const headerDescription = document.querySelector('paragraph1');
const headerLanguages = document.querySelector('.lang-list1');
let language = '';
mainProject.headerTitle.forEach((langcontainer) => {
  language = `${language}<li>${langcontainer}<li>`;
});
headerTitle.innerHTML = mainProject.headerTitle;
headerImg.src = `images/${mainProject.headerImg}`;
headerDescription.innerHTML = mainProject.headerDescription;
headerLanguages.innerHTML = language;

const workCards = [{
  cardId: 1,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
{
  cardId: 2,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
{
  cardId: 3,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
{
  cardId: 4,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
{
  cardId: 5,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
{
  cardId: 6,
  cardTitle: 'Proessional Art Printing Data',
  cardDescription: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
  cardImg: 'image2.png',
  cardLanguages: ['html', 'bootstrap', 'Ruby'],
},
];

const projectCards = document.querySelector('.main-container');
projectCards.innerHTML = '';
for (let i = 0; i < workCards.length; i += 1) {
  let language = '';
  workCards[i].cardLanguages.forEach((cardLanguages) => {
    language = `${language}<li>${cardLanguages}<li>`;
  });
  projectCards.innerHTML += `<div class="container3">
  <h1 class="show-text1">${workCards[i].cardTitle}</h1>
  <p class="paragraph4">${workCards[i].cardDescription}</p>
  <ul class="lang-list2">${language}</ul>
  <button class="btn1 display" type="button">See Project</button>
  </div>
  `;
}

const popUpWindow = document.querySelector('.popupcontainer');
const openPopUp = document.querySelector('.btn1');
const displayCard = document.querySelector('.display');
const closeBtn = document.querySelector('.closebtn');
openPopUp.addEventListener('click', () => {
  popUpWindow.classList.toggle('active');
});
for (let i = 0; i < displayCard.length; i += 1) {
  displayCard[i].addEventListener('click', () => {
    popUpWindow.classList.toggle('active');
  });
}
closeBtn.addEventListener('click', () => {
  popUpWindow.classList.remove('active');
});

// eslint-disable-next-line no-unused-vars
function togglePopup() {
  document.getElementById('popup').classList.toggle('active');
}
