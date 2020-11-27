// import projectData from '../helpers/data/_projectsData';

const projectView = (projectObject) => {
  $('#app').html(`
      <div id=project-view-container>
        <h3 id="project-title">${projectObject.title}</h3>
        <h5>${projectObject.type}</h5>
        <h6>demo</h6>
        <div id="project-demo">
          <img src="https://recordit.co/6JB7D7vaDc.gif" alt="Project demo gif">
        </div>
        <p id="project-description">${projectObject.description}</p>
        <h6>role</h6>
        <p id="project-role">${projectObject.role}</p>
        <h6>tools</h6>
        <p id="project-tools">${projectObject.technologiesUsed}</p>
        <h6>demo</h6>
      </div>`);
};
export default { projectView };
