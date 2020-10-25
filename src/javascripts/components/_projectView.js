import projectData from '../helpers/data/_projectsData';

const projectView = (projectId) => {
  projectData.getProjects().forEach((project) => {
    if (project.id === '0') {
      console.warn(projectId);
      console.warn(project.id);
      $('#app').html(`
      <div id=project-view-container>
        <h3>${project.title}</h3>
        <h5>${project.type}</h5>
        <h6>demo</h6>
        <div id="project-demo"></div>
        <p id="project-description">${project.description}</p>
        <h6>role</h6>
        <p id="project-role">${project.role}</p>
        <h6>tools</h6>
        <p id="project-tools">${project.technologiesUsed}</p>
        <h6>demo</h6>
      </div>`);
    }
  });
};
export default { projectView };
