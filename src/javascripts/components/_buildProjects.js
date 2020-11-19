import projectData from '../helpers/data/_projectsData';
import projectView from './_projectView';

const buildProjects = () => {
  projectData.getProjects().then((response) => {
    response.forEach((project) => {
      if (project.available === 'true') {
        $('#projectsContainer').append(`
        <div id="project-${project.firebaseKey}" class="project-card-container" style="background-image: url(${project.screenshot})">
          <div class="project-card">
            <div class="hover-content">
              <p class="project-type">${project.type}</p>
              <h6 class="project-title">${project.title}</h6>
              <div class="project-btn-container mt-4">
                <a href="${project.url}" target="_blank" class="outline project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>
              </div>
              </div>
          </div>
        </div>
        `);
      }
      $('body').on('click', '.view-project-btn', (e) => {
        e.stopImmediatePropagation();
        const projectId = e.currentTarget.id;
        projectView.projectView(projectId);
      });
    });
  });
};

// <button class="btn-outline view-project-btn project-btn" id="${project.firebaseKey}">view project</button>
// <a href="${project.url}" target="_blank" class="outline project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>

export default { buildProjects };
