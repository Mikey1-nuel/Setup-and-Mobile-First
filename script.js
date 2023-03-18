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

const works = document.querySelector('.works');
const div = document.createElement('div');
works.appendChild(div);
div.innerHTML = `
<div class="popupcontainer" id="popup">
<div class="popupcontainer2">
<div class="popuptitle">
<h1 class="header2">
Multi-Post Stories
</h1>
<button class="closebtn active" type="button">&times;</button>
</div>
<div class="langcontainer">
<ul class="ulcontainer">
<li class="langg">html</li>
<li class="langg">bootstrap</li>
<li class="langg">Ruby on rails</li>
</ul>
</div>
<div class="popupcontainer3">
<img src="images/image1.png" class="image2" alt="">
<div class="description1">
<p class="paragraph2">
A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
</p>
<div class="btncontainer">
<button class="popbtn" type="button"><a href="https://mikey1-nuel.github.io/Setup-and-Mobile-First/"><img src="images/Enable.png" alt="enable"></a></button>
<button class="popbtn" type="button"><a href="https://github.com/Mikey1-nuel/Setup-and-Mobile-First"><img src="images/Enable2.png" alt=""></a></button>
</div>
</div>
</div>
</div>
</div>
`;

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

/* Form Validation */

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  // debugger
  const errorMsg = document.getElementById('error');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    errorMsg.style.display = 'block';
    event.preventDefault();
    errorMsg.textContent = '(Please enter email in lowercase)';
  } else {
    errorMsg.textContent = '(Successful)';
    errorMsg.style.color = 'green';
    form.submit();
  }
});

/* Local Storage */

const formStorage = document.querySelector('#form');
formStorage.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#mail').value,
    message: document.querySelector('#msg').value,
  };
  localStorage.setItem('formStorage', JSON.stringify(data));
});
const object = JSON.parse(localStorage.getItem('formStorage'));
document.querySelector('#name').value = object.name;
document.querySelector('#mail').value = object.email;
document.querySelector('#msg').value = object.message;
