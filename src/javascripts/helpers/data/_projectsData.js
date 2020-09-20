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
  // {
  //   id: 2,
  //   title: 'cool project',
  //   screenshot: '/images/liz-pose.png',
  //   description: 'This is the best project',
  //   technologiesUsed:
  //     'HTML | CSS | Vanilla JavaScript | Version Control with Github',
  //   available: false,
  //   url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  //   githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // },
  // {
  //   id: 3,
  //   title: 'cool project',
  //   screenshot: '/images/kreamer-graphic.png',
  //   description: 'This is the best project',
  //   technologiesUsed:
  //     'HTML | CSS | Vanilla JavaScript | Version Control with Github',
  //   available: false,
  //   url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  //   githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // },
  // {
  //   id: 4,
  //   title: 'cool project',
  //   screenshot: '/images/ns-coaching-opp.png',
  //   description: 'This is the best project',
  //   technologiesUsed:
  //     'HTML | CSS | Vanilla JavaScript | Version Control with Github',
  //   available: false,
  //   url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  //   githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // },
  // {
  //   id: 5,
  //   title: 'cool project',
  //   screenshot: '/images/allyssa-flowers.png',
  //   description: 'This is the best project',
  //   technologiesUsed:
  //     'HTML | CSS | Vanilla JavaScript | Version Control with Github',
  //   available: false,
  //   url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  //   githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // },
];

const getProjects = () => projects;

export default { getProjects };
