const PROJECTS = [
  {
    name: 'Recipa',
    description:
      'Meal Finder App for users to get Meal Recipes Recommendation, Recipe Instructions and Ingredients or Get random recipes.',
    imageUrl: "'../images/png/Snapshoot-Portfolio1.png'",
    technologies: ['react', 'tailwind css', 'firebase'],
    site: 'https://recipa.netlify.app',
    repo: 'https://github.com/topeogunleye/Recipe-App-V2',
  },

  {
    name: 'Portfolio Website',
    description:
      'Portfolio website built using Brittany Chiang Portfolio as a template.',
    imageUrl: "'../images/png/Snapshoot-Portfolio2.png'",
    technologies: ['html', 'css', 'javascript'],
    site: 'https://www.topeleye.com/',
    repo: 'https://github.com/topeogunleye/v4',
  },

  {
    name: 'Meal Finder',
    description:
      "Meal Finder app I built after following a tutorial by Brad Traversy. I made my version by converting Brad's code from vanilla javascript into react, I added extra functionalities e.g react routing",
    imageUrl: "'../images/png/Snapshoot-Portfolio2.png'",
    technologies: ['react', 'tailwind css'],
    site: 'https://mealdbrecipes.netlify.app/',
    repo: 'https://github.com/topeogunleye/Recipe-App-V1',
  },

  {
    name: 'Portfolio',
    description:
      "This website you're looking at right now. It is a project from the first module at Microverse Bootcamp",
    imageUrl: "'../images/png/Snapshoot-Portfolio2.png'",
    technologies: ['html', 'css', 'javascript'],
    site: 'https://github.com/topeogunleye/Recipe-App-V1',
    repo: 'https://github.com/topeogunleye/Portfolio-Future-Version',
  },
];

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

window.addEventListener('DOMContentLoaded', () => {
  PROJECTS.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.className += 'project';
    projectDiv.className += ' flex';

    projectDiv.innerHTML = `
    <div class="project-img">
      <img
        src=${project.imageUrl}
        alt="first project"
      />
    </div>
    <div class="project-text">
      <div class="primary-text">
        <div class="experience">
          <h3>${project.name}</h3>

          <ul class="ul">
            <li class="first-child">Canopy</li>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
        </div>
      </div>
      <div class="secondary-text">
        ${project.description}
      </div>
      <div class="skills">
        <ul>
        ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
      </div>

      <button id="open" class="btn btn-skills" type="button">
        See Project
      </button>
    </div>
    `;

    document.querySelector('.works').appendChild(projectDiv);
  });
});
