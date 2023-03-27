const PROJECTS = [
  {
    id: 'Recipa',
    name: 'Recipa',
    description:
      'Meal Finder App for users to get Meal Recipes Recommendation, Recipe Instructions and Ingredients or Get random recipes.',
    imageUrl: '\'../images/png/Snapshoot-Portfolio1.png\'',
    imageSrcSet:
      '\'../images/png/Snapshoot-Portfolio1.png 544w, ../images/png/modal-desktop.png 1108w\'',
    sizes: '(min-width: 960px) 1108px, 544px',
    technologies: ['react', 'tailwind css', 'firebase'],
    site: 'https://recipa.netlify.app',
    repo: 'https://github.com/topeogunleye/Recipe-App-V2',
  },

  {
    id: 'PortfolioWebsite',
    name: 'Portfolio Website',
    description:
      'Portfolio website built using Brittany Chiang Portfolio as a template. All rights belong to Brittany Chaiang. This template is free and open source with regular MIT license',
    imageUrl: '\'../images/png/Snapshoot-Portfolio2.png\'',
    imageSrcSet:
      '\'../images/png/Snapshoot-Portfolio2.png 544w, ../images/png/modal-desktop.png 1108w\'',
    sizes: '(min-width: 960px) 1108px, 544px',
    technologies: ['html', 'css', 'javascript'],
    site: 'https://www.topeleye.com/',
    repo: 'https://github.com/topeogunleye/v4',
  },

  {
    id: 'MealFinder',
    name: 'Meal Finder',
    description:
      'Meal Finder app I built after following a tutorial by Brad Traversy. I made my version by converting Brad\'s code from vanilla javascript into react, I added extra functionalities e.g react routing',
    imageUrl: '\'../images/png/Snapshoot-Portfolio3.png\'',
    imageSrcSet:
      '\'../images/png/Snapshoot-Portfolio3.png 544w, ../images/png/modal-desktop.png 1108w\'',
    sizes: '(min-width: 960px) 1108px, 544px',
    technologies: ['react', 'tailwind css'],
    site: 'https://mealdbrecipes.netlify.app/',
    repo: 'https://github.com/topeogunleye/Recipe-App-V1',
  },

  {
    id: 'Portfolio',
    name: 'Portfolio',
    description:
      'This website you\'re looking at right now. It is a project I built while developing my pair programming skills during my first module at Microverse Bootcamp.',
    imageUrl: '\'../images/png/Snapshoot-Portfolio4.png\'',
    imageSrcSet:
      '\'../images/png/Snapshoot-Portfolio4.png 544w, ../images/png/modal-desktop.png 1108w\'',
    sizes: '(min-width: 960px) 1108px, 544px',
    technologies: ['html', 'css', 'javascript'],
    site: 'https://github.com/topeogunleye/Recipe-App-V1',
    repo: 'https://github.com/topeogunleye/Portfolio',
  },
];

// window.addEventListener('DOMContentLoaded', () => {
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
        ${project.technologies.map((tech) => `<li>${tech}</li>`)
    .join('')}
        </ul>
      </div>

      <button class="btn btn-skills open-modal" type="button" id="${
  project.id
}">
        See Project
      </button>

      <div class="modal-container" id="${project.id}">
            <div class="modal">
              <div class="project flex">
                <div class="primary-text">
                  <div class="experience">
                    <div class="modal-header">
                      <h3>${project.name}</h3>
                      <button type="button" class="close-modal" id="${
  project.id
}"></button>
                    </div>
                    <ul class="ul">
                      <li class="first-child">Canopy</li>
                      <li>Back End Dev</li>
                      <li>2015</li>
                    </ul>
                  </div>
                </div>
                <div class="project-img">
                <img
                src=${project.imageUrl}
                srcset = ${project.imageSrcSet}
                sizes=${project.sizes}
                alt="first project"
                id=${project.id}
              />
                </div>
                <div class="project-text">
                  <div class="secondary-text" id=${project.id}>
                    ${project.description}
                  </div>
                  <div class = "skills-buttons-container">
                  <div class="skills">
                  <ul id="${project.id}">
                  ${project.technologies
    .map((tech) => `<li>${tech}</li>`)
    .join('')}
                  </ul>
                  </div>

                  <div class="modal-buttons">
                  <a href="${project.site}" target="_blank">
                  <button class="btn btn-live btn-modal" type="button">
                  See Live
                  <img
                    src="images/png/Icon.png"
                    alt="link to project website"
                  />
                </button>
                </a>
                <a href="${project.repo}" target="_blank">
                <button class="btn btn-source btn-modal" type="button">
                  See Source
                  <img
                    src="images/png/Vector.png"
                    alt="link to project repo"
                  />
                </button>
                </a>
                </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
    </div>
    `;

    document.querySelector('.works')
      .appendChild(projectDiv);
  });

  const openModalBtns = document.querySelectorAll('.open-modal');
  const modals = document.querySelectorAll('.modal-container');
  const closeModalBtns = document.querySelectorAll('.close-modal');

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      document.querySelector('body').style.overflow = 'hidden';
      const projId = event.target.id;
      [...modals]
        .find((modal) => modal.id === projId)
        .classList
        .add('show-modal');
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const projId = event.target.id;
      [...modals]
        .find((modal) => modal.id === projId)
        .classList
        .remove('show-modal');
      document.querySelector('body').style.overflow = 'initial';
    });
  });
});

const form = document.querySelector('.form');

const email = document.querySelector('.form input[name=\'email\']');
const fullName = document.querySelector('.form input[name=\'fullname\']');
console.log(fullName);
const message = document.querySelector('.form textarea[name=\'message\']');

form.addEventListener('submit', (event) => {
  const error = document.querySelector('.error-msg');
  const emailToLowerCase = email.value.toLowerCase();

  if (email.validity.patternMismatch) {
    error.textContent = `Email must be in lowercase: ${emailToLowerCase}`;
    event.preventDefault();
  } else {
    error.textContent = '';
  }
});

window.onload = () => {
  const showData = JSON.parse(localStorage.getItem('dataform'));

  if (showData) {
    fullName.value = showData.fullName;
    email.value = showData.email;
    message.value = showData.message;
  }
};

form.addEventListener('input', () => {
  const data = {
    fullName: fullName.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('dataform', JSON.stringify(data));
});

const accordionHeaders = document.querySelectorAll('.accordion');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.querySelector('.accordion-content');
    const accordionIcon = header.querySelector('i');
    header.setAttribute('aria-expanded', header.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    accordionIcon.classList.toggle('fa-angle-right');
    accordionIcon.classList.toggle('fa-angle-down');
  });
});
