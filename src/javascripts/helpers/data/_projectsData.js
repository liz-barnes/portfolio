const projects = [
  {
    id: 0,
    title: 'Bear Watcher',
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
    title: 'Pet Adoption',
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
    title: 'Sorting Hat',
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
    title: 'Color Flipper',
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
    title: 'Tamagotchi',
    screenshot: '',
    description: 'Recreated Tamagotchi! User can interact with their pet! Pet can eat, sleep, fight and play.',
    technologiesUsed:
      'HTML | CSS | JavaScript | JQuery | SASS',
    available: false,
    url: '',
    githubProject: 'https://github.com/liz-barnes/Tamagotchi',
  },
];

const getProjects = () => projects;

export default { getProjects };
