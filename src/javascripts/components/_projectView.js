const projectView = (projectObject) => {
  const domString = `
      <div id=project-view-container>
        <h3>${projectObject.title}</h3>
        <h5>${projectObject.type}</h5>
        <h6>demo</h6>
        <div id="project-demo"></div>
        <p id="project-description">${projectObject.description}</p>
        <h6>role</h6>
        <p id="project-role">${projectObject.role}</p>
        <h6>tools</h6>
        <p id="project-tools">${projectObject.technologiesUsed}</p>
        <h6>demo</h6>
      </div>`;
  return domString;
};

export default { projectView };
