function ItinerumSurveyDirective(ItinerumSurveyComponent, reactDirective) {
    return reactDirective(ItinerumSurveyComponent, [
    //   'surveyProps'
    ]);
}
  
ItinerumSurveyDirective.$inject = ['ItinerumSurveyComponent', 'reactDirective'];
  
export default ItinerumSurveyDirective;
  