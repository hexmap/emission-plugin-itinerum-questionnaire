export default class ActivityCtrl {
  constructor(ActivityService) {
    this.stackQuestions = ActivityService.fetchSurveyJson();

    // ActivityService.fetchSurveyJson()
    //   .then(result => {
    //     console.log(result);
    //     this.stackQuestions = result.survey;
    //   });
  }
}

ActivityCtrl.$inject = ['ActivityService'];
