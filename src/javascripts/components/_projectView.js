// import projectData from '../helpers/data/_projectsData';

const projectView = (projectObject) => {
  $('#app').html(`
      <div id=project-view-container>
        <h3 id="project-title">${projectObject.title}</h3>
        <h5>${projectObject.type}</h5>
        <h6>demo</h6>
        <div id="project-demo"></div>
        <p id="project-description">${projectObject.description}</p>
        <h6>role</h6>
        <p id="project-role">${projectObject.role}</p>
        <h6>tools</h6>
        <p id="project-tools">${projectObject.technologiesUsed}</p>
        <h6>demo</h6>
      </div>`);
  // projectData.getProjects().find(obj => obj.id === projectId);
  // console.warn(projectObject);
  // console.warn(projectObject.id);
  // if (projectObject === '5') {
  //   $('#app').html(`
  //     <div id=project-view-container>
  //       <h3>${projectObject.title}</h3>
  //       <h5>${projectObject.type}</h5>
  //       <h6>demo</h6>
  //       <div id="project-demo"></div>
  //       <p id="project-description">${projectObject.description}</p>
  //       <h6>role</h6>
  //       <p id="project-role">${projectObject.role}</p>
  //       <h6>tools</h6>
  //       <p id="project-tools">${projectObject.technologiesUsed}</p>
  //       <h6>demo</h6>
  //     </div>`);
  // }
};
export default { projectView };
