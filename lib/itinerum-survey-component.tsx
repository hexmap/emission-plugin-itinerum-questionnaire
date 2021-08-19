/* 
 * www/itinerum_questionnaire/QuestionStack.tsx
 */
import React, { useMemo, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { StackQuestion } from './questionnaireTypes';

const questionMap: {[key: string]: any} = {
    dropdown: undefined,
    checkbox: undefined,
    number: undefined,
    address: undefined,
    textBox: undefined,
};



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'transparent',
            padding: 16
        },
        rootHover: {
            backgroundColor: lightBlue[50],
        },
        placeholder: {
            backgroundColor: theme.palette.common.white,
            borderColor: theme.palette.grey[300],
            borderStyle: 'dashed',
            borderWidth: 1,
            padding: 10,
            height: 100,
            textAlign: 'center'
        },
        placeholderTitle: {
            color: theme.palette.grey[600],
            fontSize: 18,
            marginTop: 5,
            fontWeight: 'bold'
        },
        placeholderText: {
            color: theme.palette.grey[600],
            fontSize: 14,
            marginTop: 14
        }        
    }),
);

interface SurveyStackSchemaProperties {
    [name: string]: any
}

interface SurveyStackSchemaDependency {
    [name: string]: any
}

interface SurveyStackSchema {
    type: string;
    properties: SurveyStackSchemaProperties;
    dependencies: SurveyStackSchemaDependency;
    propertyOrder: string[];
}

interface SurveyStackQuestions {
    options: any;
    schema: SurveyStackSchema;
}


export interface QuestionStackProps {
    // questions: StackQuestion[];
    // stackQuestions: any;
    stackQuestions: SurveyStackQuestions;
}

const ItinerumQuestionStack = (props: QuestionStackProps) => {
    const classes = useStyles();
    const stackRef = useRef(null);

    console.log(props);
    const properties = props.stackQuestions.schema.properties;
    const propertyOrder = props.stackQuestions.schema.propertyOrder;

    // wait until props available to render
    if (!props.stackQuestions) {
        return <div />
    }

    const placeholderQuestion = (
        <Paper className={classes.placeholder} elevation={1}>
            <Box>
                <Typography className={classes.placeholderTitle}>Question Placeholder</Typography>
            </Box>
            <Typography className={classes.placeholderText}>Drop your first question here to get started.</Typography>
        </Paper>
    );

    // memoize the stack's elements to attempt to limit re-writes when dragging
    // question buttons to form. There is a slight lag due to the css background color
    // of the stack changing on hover when dragging a button. This could be snakeoil.`    
    const memoizedStack = useMemo(() => {
        if (!properties) {
            return <div>abc</div>
        }

        return propertyOrder.map((propertyName, index) => {
            // const Question = questionMap[question.type];
            const title = properties[propertyName].title;

            return (
                <div>{title}</div>
        //         // <Question
        //             // id={question.id}
        //             // title={question.title}
        //             // fieldName={question.fieldName}
        //             // options={question.options}
        //             // deleteQuestion={handleDeleteQuestion}
        //             // saveQuestion={saveQuestion}
        //         // />
            );
        })        
    }, [properties]);

    return (
        <div>
            <div ref={stackRef}>
                {propertyOrder.length > 0 ? memoizedStack : placeholderQuestion}
            </div>
        </div>
    );
}

function ItinerumQuestionStackFactory() {
    return ItinerumQuestionStack;
}

export default ItinerumQuestionStackFactory;
