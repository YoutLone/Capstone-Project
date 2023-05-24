const openHamburger = document.getElementById('openHamburger');
const closeHamburger = document.getElementById('closeHamburger');
const navcontainer = document.querySelector('.bottom-nav_center');
const navLink = document.querySelectorAll('.nav-list_item');

openHamburger.addEventListener('click', () => {
  navcontainer.classList.toggle('hidden');
  openHamburger.classList.add('hidden');
  closeHamburger.classList.remove('hidden');
});

closeHamburger.addEventListener('click', () => {
  navcontainer.classList.toggle('hidden');
  openHamburger.classList.remove('hidden');
  closeHamburger.classList.add('hidden');
});

navLink.forEach((link) => link.addEventListener('click', () => {
  navcontainer.classList.add('hidden');
  openHamburger.classList.remove('hidden');
  closeHamburger.classList.add('hidden');
}));

//= == End of Mobile Menu ===

const SpecialChefs = [
  {
    name: 'Mr.William',
    position: 'Executive Chef',
    image: './images/chef-william.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Adam',
    position: 'Head Chef',
    image: './images/chef-adam.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Rachell',
    position: 'Sous Chef',
    image: './images/chef-rachell.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Thomas Andrew',
    position: 'Commis Chef',
    image: './images/chef-thomas.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Mashama',
    position: 'Chef de partie',
    image: './images/chef-mashama.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Ms.Olivia Rodrigo',
    position: 'Prep cook',
    image: './images/chef-olivia.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Reece James',
    position: 'Relief cook',
    image: './images/chef-jame.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.David Simon',
    position: 'Sous Chef',
    image: './images/chef-david.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Alexander Cowel',
    position: 'Chef de partie',
    image: './images/chef-alexander.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Ms.Catherine',
    position: 'Relief cook',
    image: './images/chef-catherine.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Henry Mike',
    position: 'Commis Chef',
    image: './images/chef-henry.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Ms.Emily James',
    position: 'Relief cook',
    image: './images/chef-emily.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Jimmy',
    position: 'Chef de partie',
    image: './images/chef-jimmy.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Richard William',
    position: 'Sous Chef',
    image: './images/chef-richard.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Sophia Grace',
    position: 'Relief cook',
    image: './images/chef-sophia.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Mike Reid',
    position: 'Commis Chef',
    image: './images/chef-mike.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Bella Anna',
    position: 'Prep cook',
    image: './images/chef-bella.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mr.Robert Liam',
    position: 'Sous Chef',
    image: './images/chef-robert.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Scarlett Johanna',
    position: 'Prep cook',
    image: './images/chef-scarlett.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
  {
    name: 'Mrs.Maggie Laura',
    position: 'Relief Chef',
    image: './images/chef-maggie.jpg',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
];

const ourChefs = document.getElementById('all-chefs');
const seeMore = document.querySelector('.our-chefs_see-more');
const seeLess = document.querySelector('.our-chefs_see-less');

function renderchefs() {
  // Create a copy of the dynamic-chefs array
  const shuffledChefs = SpecialChefs.slice();

  // Shuffle the array in random order
  for (let i = shuffledChefs.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledChefs[i], shuffledChefs[randomIndex]] = [shuffledChefs[randomIndex], shuffledChefs[i]];
  }

  // Display the first 6 randomly shuffled chefs
  for (let i = 0; i < 6; i += 1) {
    if (shuffledChefs[i]) {
      ourChefs.innerHTML += `
          <article class="our-chefs_card">
            <div class="container">
              <div class="img-holder">
                <img class='square' src="./images/black-white.png" alt='checkbox'/>
                <img src=${shuffledChefs[i].image} alt=${shuffledChefs[i].name} class="chef-img">
              </div>
              <div class="our-chefs_card-details">
                <h3 class="our-chefs_card-details-name">${shuffledChefs[i].name}</h3>
                <p class="our-chefs_card-details-info">${shuffledChefs[i].position}</p>
                <p class="our-chefs_card-details-about">${shuffledChefs[i].about}</p>
              </div>
            </div>
          </article>
        `;
    }
  }
}

window.addEventListener('load', renderchefs);

let currentItems = 2;

seeMore.addEventListener('click', () => {
  const chefsdata = [
    ...document.querySelectorAll('.our-chefs_card'),
  ];

  for (let i = currentItems; i < chefsdata.length; i += 1) {
    chefsdata[i].style.display = 'grid';
  }

  currentItems += 4;

  if (currentItems >= chefsdata.length) {
    seeMore.style.display = 'none';
    seeLess.classList.remove('hidden');
  }
});

seeLess.addEventListener('click', () => {
  const chefsdata = [
    ...document.querySelectorAll('.our-chefs_card'),
  ];

  for (let i = 2; i < chefsdata.length; i += 1) {
    chefsdata[i].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    seeMore.style.display = 'grid';
    seeLess.classList.add('hidden');
  }
});
