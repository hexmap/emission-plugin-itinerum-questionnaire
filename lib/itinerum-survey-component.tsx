/* 
 * lib/itinerum-survey-component.tsx
 */
import React from 'react';

import { SurveyStackQuestions } from './questionnaireTypes';    
import QuestionManager from './questions/QuestionManager';



export interface QuestionStackProps {
    stackQuestions: SurveyStackQuestions;
}

const ItinerumQuestionStack = (props: QuestionStackProps) => {
    return (
        <div>
            <QuestionManager {...props} />
        </div>
    );
}

function ItinerumQuestionStackFactory() {
    return ItinerumQuestionStack;
}

export default ItinerumQuestionStackFactory;
