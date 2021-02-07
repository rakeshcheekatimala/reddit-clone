import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Comment } from '@material-ui/icons';
import { abbreviateNumber } from './../../../utils';
import { Grid } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

/**
* @author
* @function Post which describes the title,votes,comments,etc.
**/

export default function Post({ title, author_fullname, num_comments, ups }) {
    const classes = useStyles();

    return (
        <Card>
            <Grid container>
                <Grid item container direction="column" xs={1} alignItems="center" justify="center">
                    <ArrowUpward />

                    <Typography variant="body2" color="textSecondary" component="h2">{abbreviateNumber(ups)}</Typography>
                    <ArrowDownward />
                </Grid>
                <Grid item>
                    <CardContent>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Posted by {author_fullname}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h2">
                                {title}
                            </Typography>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<Comment />}
                        >
                            {num_comments} comments
                </Button>
                    </CardActions>
                </Grid>
            </Grid>

        </Card >
    );
}
