/* 
 * lib/itinerum-survey-component.tsx
 */
import React, { useMemo, useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { SurveyStackQuestions } from './questionnaireTypes';    
import SelectOneQuestion from './questions/SelectOne';
import SelectManyQuestion from './questions/SelectMany';
import EmailQuestion from './questions/Email';
import MapMarkerQuestion from './questions/MapMarker';
import NumberQuestion from './questions/Number';
import TextBoxQuestion from './questions/TextBox';


const questionMap: {[key: string]: any} = {
    select: SelectOneQuestion,
    'select-many': SelectManyQuestion,
    integer: NumberQuestion,
    'map-marker': MapMarkerQuestion,
    'text-area': TextBoxQuestion,
    email: EmailQuestion,
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


export interface QuestionStackProps {
    stackQuestions: SurveyStackQuestions;
}

const ItinerumQuestionStack = (props: QuestionStackProps) => {
    const classes = useStyles();
    const stackRef = useRef(null);

    const fields = props.stackQuestions.options.fields;
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

        // map schema properties in order to questions cards
        return propertyOrder.map(propertyName => {
            const fieldType = fields[propertyName].type;
            const Question = questionMap[fieldType];
            const questionProps = properties[propertyName];
            console.log(propertyName, fieldType);

            return (
                <Question {...questionProps} />
            );
        })        
    }, [properties]) as JSX.Element[];

    return (
        <div>
            <div ref={stackRef}>
                {propertyOrder.length > 0 ? memoizedStack[1] : placeholderQuestion}
            </div>
        </div>
    );
}

function ItinerumQuestionStackFactory() {
    return ItinerumQuestionStack;
}

export default ItinerumQuestionStackFactory;
