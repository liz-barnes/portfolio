import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`).then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects) {
        Object.keys(allProjects).forEach((projectId) => {
          projects.push(allProjects[projectId]);
        });
      }
      console.warn(projects);
      resolve(projects);
    }).catch((error) => reject(error));
});

export default { getProjects };
