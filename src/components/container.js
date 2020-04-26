import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minWidth: 600,
        minHeight: 300
    },
}));

export default function SimpleContainer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} 
            direction="column"
            justify="center"
            alignItems="center">
                {props.children}
            </Grid>
        </div>
    );
}