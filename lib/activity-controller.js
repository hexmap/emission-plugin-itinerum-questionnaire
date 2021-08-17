export default class ActivityCtrl {
  constructor(ActivityService, targetUser) {
    this.stackQuestion = [];

    ActivityService.findAllWatchedRepos(targetUser)
      .then(result => {
        this.stackQuestions = result;
      });
  }
}

ActivityCtrl.$inject = ['ActivityService', 'targetUser'];
