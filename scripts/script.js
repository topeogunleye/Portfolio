const navbar = document.querySelector('.navbar');
const ham = document.querySelector('.ham');
const menuLinks = document.querySelectorAll('.menuLink');

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}

ham.addEventListener('click', toggleHamburger);

// toggle when clicking on links

// METHOD 1
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleHamburger);
});
