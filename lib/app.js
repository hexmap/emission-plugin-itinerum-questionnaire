import angular from 'angular';
import ActivityService from './activity-service';
import ActivityController from './activity-controller';
import ItinerumSurveyDirective from './itinerum-survey-directive';
import ItinerumSurveyComponent from './itinerum-survey-component';

import 'ngreact';

angular
  .module('app', ['react'])
  .service('ActivityService', ActivityService)
  .controller('ActivityCtrl', ActivityController)
  .factory('ItinerumSurveyComponent', ItinerumSurveyComponent)
  .directive('itinerumSurvey', ItinerumSurveyDirective)

  // .value('surveyFilename', '../data/survey.json');

angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
