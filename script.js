/* Mobile menu */

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
  headerImg: 'image1.png',
  headerDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  headerLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
  liveLink: 'https://mikey1-nuel.github.io/Setup-and-Mobile-First/',
  projectLink: 'https://github.com/Mikey1-nuel/Setup-and-Mobile-First',
};

const headerTitle = document.querySelector('.header1');
const headerImg = document.querySelector('.image1');
const headerDescription = document.querySelector('.paragraph1');
const headerLanguages = document.querySelector('.lang-list1');
let language = '';
mainProject.headerLanguages.forEach((langcontainer) => {
  language = `${language}<li>${langcontainer}</li>`;
});
headerTitle.innerHTML = mainProject.headerTitle;
headerImg.src = `images/${mainProject.headerImg}`;
headerDescription.innerHTML = mainProject.headerDescription;
headerLanguages.innerHTML = language;

const popupProject = {
  popupTitle: 'Keeping track of hundreds  of components website',
  popupImg: 'Snapshoot Portfolio.png',
  popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

const popupTitle = document.querySelector('.header2');
const popupImg = document.querySelector('.image2');
const popupDescription = document.querySelector('.paragraph2');

popupTitle.innerHTML = popupProject.popupTitle;
popupImg.src = `images/${popupProject.popupImg}`;
popupDescription.innerHTML = popupProject.popupDescription;

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
    language = `${language}<li>${cardLanguages}</li>`;
  });
  projectCards.innerHTML += `<div class="container3">
<h1 class="card-header">${workCards[i].cardTitle}</h1>
<p class="paragraph4">${workCards[i].cardDescription}</p>
<ul class="lang-list2">${language}</ul>
<button class="btn5 display btn1" type="button">
See Project
</button>
</div>
`;
}

const popUpWindow = document.querySelector('.popupcontainer');
const openPopUp = document.querySelector('.openpop');
const displayCard = document.querySelectorAll('.display');
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
