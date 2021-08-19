function ItinerumSurveyDirective(ItinerumSurveyComponent, reactDirective) {
    return reactDirective(ItinerumSurveyComponent, [
      'stackQuestions',
    ]);
}
  
ItinerumSurveyDirective.$inject = ['ItinerumSurveyComponent', 'reactDirective'];
  
export default ItinerumSurveyDirective;
  