import jsonData from '../data/survey.json';


const readJsonFile = () => {
  return new Promise((resolve, reject) => {
    resolve(jsonData);
  });
};


export default class ActivityService {
  fetchSurveyJson() {
    return readJsonFile()
      .then(function(response) {
        console.log(response);
        return response;
      });
  }
}

ActivityService.$inject = [];
