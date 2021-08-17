export default class ActivityCtrl {
  constructor(ActivityService) {
    this.stackQuestion = [];

    ActivityService.fetchSurveyJson()
      .then(result => {
        this.stackQuestions = result;
      });
  }
}

ActivityCtrl.$inject = ['ActivityService'];
