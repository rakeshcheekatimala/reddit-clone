import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Whatshot, FiberNew, BarChart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    action__buttons: {
        border: '2px solid #ccc',
    },
    automargin: {
        margin: 'auto',
        justifyContent: 'center'
    }
}));

export default function PostBar() {
    const classes = useStyles();

    return (
        <Grid container className={classes.automargin}>
            <Grid item xs={12} md={6} className={classes.action__buttons}>
                <Toolbar className={classes.automargin}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="hot">
                        <Whatshot />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="new">
                        <FiberNew />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="top">
                        <BarChart />
                    </IconButton>
                </Toolbar>
            </Grid>
        </Grid>
    );
}
