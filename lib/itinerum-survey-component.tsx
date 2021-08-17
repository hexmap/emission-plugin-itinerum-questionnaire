/* 
 * www/itinerum_questionnaire/QuestionStack.tsx
 */
import React, { useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { StackQuestion } from './questionnaireTypes';



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
    questions: StackQuestion[];
}

const ItinerumQuestionStack = (props: QuestionStackProps) => {
    const classes = useStyles();
    const stackRef = useRef(null);

    const placeholderQuestion = (
        <Paper className={classes.placeholder} elevation={1}>
            <Box>
                <Typography className={classes.placeholderTitle}>Question Placeholder</Typography>
            </Box>
            <Typography className={classes.placeholderText}>Drop your first question here to get started.</Typography>
        </Paper>        
    );

    const memoizedStack = 'abc';

    return (
        <div>
            <div ref={stackRef}>
                {props.questions && props.questions.length > 0 ? memoizedStack : placeholderQuestion}
            </div>
        </div>
    );
}

function ItinerumQuestionStackFactory() {
    return ItinerumQuestionStack;
}

export default ItinerumQuestionStackFactory;
