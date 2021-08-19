/* 
 * lib/questions/SelectMany.tsx
 */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

import { SharedQuestionProps } from './sharedProps';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: theme.spacing(3),
        },
    }),
);


const SelectManyQuestion = (props: SharedQuestionProps) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    console.log(props);
    return (
        <FormControl required error={error} component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{props.title}</FormLabel>
            <FormGroup>
            { props.enum.map(optionText => (
                <FormControlLabel
                    control={<Checkbox checked={gilad} onChange={handleChange} name={optionText} />}
                    label={optionText}
                />
            ))}
            </FormGroup>
            <FormHelperText>An answer is required.</FormHelperText>
        </FormControl>
    );
}

export default SelectManyQuestion;
