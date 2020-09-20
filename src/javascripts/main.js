import navbarEvents from './components/_navigation';
// import projectData from './helpers/data/_projectsData';
import buildProjects from './components/_buildProjects';

import '../styles/main.scss';

const init = () => {
  navbarEvents.navbarEvents();
  buildProjects.buildProjects();
};

init();
