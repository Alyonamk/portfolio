// const burgerMenu = document.querySelector('.burger-menu');
// const burgerOpenBtn = document.querySelector('.burger-modal-open');
// const burgerCloseBtn = document.querySelector('.burger-modal-close-btn');

// const homeLink = document.getElementById('home');
// const aboutLink = document.getElementById('about-me');
// const contactsLink = document.getElementById('contacts');
// const productsLink = document.getElementById('products');

// // Function to open burger menu
// const openBurgerMenu = () => {
//   burgerMenu.classList.remove('is-hidden');
//   burgerMenu.classList.add('open');
// };

// // Function to close the burger menu
// const closeBurgerMenu = () => {
//   burgerMenu.classList.add('is-hidden');
//   burgerMenu.classList.remove('open');
// };

// // Add event listeners to open and close the burger menu
// burgerOpenBtn.addEventListener('click', openBurgerMenu);
// burgerCloseBtn.addEventListener('click', closeBurgerMenu);


// homeLink.addEventListener('click', closeBurgerMenu);
// aboutLink.addEventListener('click', closeBurgerMenu);
// contactsLink.addEventListener('click', closeBurgerMenu);


const burgerMenu = document.querySelector('.burger-menu');
const burgerOpenBtn = document.querySelector('.burger-modal-open');
const burgerCloseBtn = document.querySelector('.burger-modal-close-btn');

const homeLink = document.getElementById('home');
const howMadeLink = document.getElementById('about');
const contactsLink = document.getElementById('contacts');
const productsLink = document.getElementById('products');

// Function to open burger menu
const openBurgerMenu = () => {
  burgerMenu.classList.remove('is-hidden');
  burgerMenu.classList.add('open');
};

// Function to close the burger menu
const closeBurgerMenu = () => {
  burgerMenu.classList.add('is-hidden');
  burgerMenu.classList.remove('open');
};

// Add event listeners to open and close the burger menu
burgerOpenBtn.addEventListener('click', openBurgerMenu);
burgerCloseBtn.addEventListener('click', closeBurgerMenu);
mobileClose.addEventListener('click', closeBurgerMenu);

homeLink.addEventListener('click', closeBurgerMenu);
howMadeLink.addEventListener('click', closeBurgerMenu);
contactsLink.addEventListener('click', closeBurgerMenu);
productsLink.addEventListener('click', closeBurgerMenu);
