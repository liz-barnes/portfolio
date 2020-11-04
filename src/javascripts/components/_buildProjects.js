import projectData from '../helpers/data/_projectsData';
import projectView from './_projectView';

const buildProjects = () => {
  projectData.getProjects().then((response) => {
    console.warn(response);
    response.forEach((project) => {
      if (project.available === true) {
        $('#projectsContainer').append(`
        <div id="project-${project.firebaseKey}" class="project-card-container" style="background-image: url(${project.screenshot})">
          <div class="project-card">
            <div class="hover-content">
              <p class="project-type">${project.type}</p>
              <h6 class="project-title">${project.title}</h6>
              <div class="project-btn-container">
                <button class="view-project-btn project-btn" id="${project.firebaseKey}">view project</button>
                <a href="${project.url}" target="_blank" class="project-btn visit-site-btn" id="${project.firebaseKey}">visit site</a>
              </div>
              </div>
          </div>
        </div>
        `);
      }
    });
    $('body').on('click', '.view-project-btn', (e) => {
      e.stopImmediatePropagation();
      const projectId = e.currentTarget.id;
      projectView.projectView(projectId);
      console.warn(projectId);
    });
  });
};

// {/* <button class="project-btn" id="visit-site-btn">visit site</button> */}

// const buildProjects = () => {
//   projectData.getProjects().forEach((project) => {
//     if (project.available === true) {
//       $('#projectsContainer').append(
//         `<div id="project-${project.id}" class="projectCard">
//         <div class="title"><h3>${project.title}</h3></div>
//         <div class="projectImage" style="background-image: url(${project.screenshot})"></div>
//         <div class="project-description"><h5>${project.description}</h5></div>
//         <div id="buttonContainer">
//           <div class="projectButton"><h4><a href=${project.url} class="btn btn-outline-info">view project</a></h4></div>
//           <div class="projectButton"><h4><a href=${project.githubProject} class="btn btn-outline-info">visit site</a></h4></div>
//         </div>
//         <div class="tech-used"><p>${project.technologiesUsed}</p></div>
//       </div>`
//       );
//     }
//   });
// };

// `<div id="project-${project.id}" class="projectCard">
//           <div class="title"><h3>${project.title}</h3></div>
//           <div class="projectImage" style="background-image: url(${project.screenshot})"></div>
//           <img src=${project.screenshot} id="projectImage"></img>
//           <div class="project-description"><h4>${project.description}</h4></div>
//           <div class="tech-used"><p>${project.technologiesUsed}</p></div>
//           <div class="project-link"><h4><a href=${project.url}>Check it out!</a></h4></div>
//           <div class="project-link"><p><a href=${project.githubUrl}>Other projects on GitHub</a></p></div>
//         </div>`

// `<div id="project-${project.id}" class="projectCard" style="background-image: url(${project.screenshot})"></div>`
// <img src="${item.screenshot}" id="projectImage" style="width"></img>

export default { buildProjects };
