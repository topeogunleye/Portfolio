// https://codepen.io/ljc-dev/embed/GRoLWxj?height=600&default-tab=js,result&embed-version=2
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const navbar = document.querySelector('.navbar'); // list
const ham = document.querySelector('.ham'); // button
const menuLinks = document.querySelectorAll('.menuLink');

function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}

// toggles hamburger menu in and out when clicking on the hamburger
ham.addEventListener('click', toggleHamburger);

// toggle when clicking on links
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleHamburger);
});

// Add Highlight to Active Nav Link
// https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
const sections = document.querySelectorAll('section', 'footer');

const navLi = document.querySelectorAll('.navbar ul li a');

window.onscroll = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    // eslint-disable-next-line no-restricted-globals
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
      // console.log(current);
    }
  });

  navLi.forEach((li) => {
    // console.log(li);
    li.classList.remove('active');

    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};