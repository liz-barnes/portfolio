const showBio = () => {
  $('#bioPage').show();
  $('#technologiesPage').hide();
  $('#projectsPage').hide();
};

const showTechnologies = () => {
  $('#technologiesPage').show();
  $('#bioPage').hide();
  $('#projectsPage').hide();
};

const showProjects = () => {
  $('#technologiesPage').hide();
  $('#bioPage').hide();
  $('#projectsPage').show();
};

const showHome = () => {
  $('#technologiesPage').show();
  $('#bioPage').show();
  $('#projectsPage').show();
};

const navbarEvents = () => {
  // $('#navToBio').on('click', (e) => {
  //     console.log(e);
  // });
  $('body').on('click', (e) => {
    const target = e.target.id;
    console.warn(target);
    if (target === 'navToBio') {
      showBio();
    } else if (target === 'navToTechnologies') {
      showTechnologies();
    } else if (target === 'navToProjects') {
      showProjects();
    } else if (target === 'navToHome') {
      showHome();
    }
  });
  // $('body').on('click', showBio());
};

export default { navbarEvents };
