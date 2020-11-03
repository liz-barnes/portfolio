import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
console.warn('url', baseUrl);

const projects = [
  {
    id: 0,
    title: 'bear watcher',
    type: 'website',
    screenshot: 'src/images/bearwatcher.png',
    description:
      'This application allows users to track a bear that they see out in the wild by uploading a picture!', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML | CSS | JavaScript | Bootstrap | Github',
    available: true,
    url: 'https://lizb-bear-watcher.netlify.app/',
    githubProject: 'https://github.com/liz-barnes/bear-watcher',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    id: 1,
    title: 'pet adoption',
    type: 'website',
    screenshot: 'src/images/petadoption.png',
    description: 'This application allows users to filter through and view the pets that are available for adoption.',
    technologiesUsed:
      'HTML | CSS | Vanilla JavaScript | Version Control with Github',
    available: true,
    url: 'https://preciouspetsadoptionagency.netlify.app/#',
    githubProject: 'https://github.com/liz-barnes/pet-adoption',
  },
  {
    id: 2,
    title: 'sorting hat',
    screenshot: '',
    description: 'Have you ever always wondered which Hogwarts house you belong to? Users can type their name and sort themselves into a house!',
    technologiesUsed:
      'HTML | CSS | JavaScript | Bootstrap',
    available: false,
    url: 'hhttps://hoggywarts-sorting-hat.netlify.app/',
    githubProject: 'https://github.com/liz-barnes/sorting-hat',
  },
  {
    id: 3,
    title: 'color flipper',
    screenshot: '',
    description: 'Users can change the background color and see the color code on the click of a button.',
    technologiesUsed:
      'HTML | CSS | JavaScript | Version Control with Github',
    available: false,
    url: '',
    githubProject: 'https://github.com/liz-barnes/color-flipper',
  },
  {
    id: 4,
    title: 'tamagotchi',
    screenshot: '',
    description: 'Recreated Tamagotchi! User can interact with their pet! Pet can eat, sleep, fight and play.',
    technologiesUsed:
      'HTML | CSS | JavaScript | JQuery | SASS',
    available: false,
    url: '',
    githubProject: 'https://github.com/liz-barnes/Tamagotchi',
  },
  {
    id: 5,
    title: 'zenterest',
    type: 'website',
    typeOfProject: 'Personal project',
    screenshot: 'src/images/zenterest-screenshot.png',
    description: 'User can create boards and add pins to those boards.',
    technologiesUsed:
      'HTML | CSS | JavaScript | JQuery | SASS | Firebase',
    available: true,
    url: 'https://pinterest-5a315.web.app/#',
    githubProject: 'https://github.com/liz-barnes/zenterest.git',
  },
];

const getProjects = () => projects;

export default { getProjects };

// const retrieveProjects = () => new Promise((resolve, reject) => {
//     axios
//     .get(`${baseUrl}/projects.json`). then((response) => {
//       console.warn('response', response);
//       resolve(console.warn)
//   });
// });

const retrieveProjects = () => {
  axios
    .get(`${baseUrl}/projects.json`).then((response) => {
      console.warn('response', response);
    });
};

retrieveProjects();
