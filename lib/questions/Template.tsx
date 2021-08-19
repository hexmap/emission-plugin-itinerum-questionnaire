/* 
 * lib/questions/Template.tsx
 */
import React from 'react';

interface QuestionTemplateProps {
    children?: JSX.Element | never[]
}

const QuestionTemplate = (props: QuestionTemplateProps) => {
    return (
        <div>
            {props.children}

            <div>
                Back / Next Buttons
            </div>
        </div>
    );
}

export default QuestionTemplate;
