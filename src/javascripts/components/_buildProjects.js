const buildProjects = (array) => {
  array.forEach((item) => {
    $('#projectsContainer').append(
      `<div id="project-${item.id}">
        <div id="imageContainer">
          <img src="${item.screenshot}" id="projectImage">
        </div>`
    );
  });
};

export default { buildProjects };
