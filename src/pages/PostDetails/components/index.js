import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Comment } from '@material-ui/icons';
import { abbreviateNumber } from './../../../utils';
import { Grid } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { fromNow } from './../../../utils'

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

/**
* @author
* @function PostDetail which describes the title,votes,comments,etc.
**/

const PostDetail = ({ title, author, num_comments, ups, created, selftext, thumbnail }) => {
    const classes = useStyles();
    const updated = new Date(created * 1000);
    const timeago = fromNow(updated);

    return (
        <Card>
            <Grid container>
                <Grid item container direction="column" xs={1} alignItems="center" justify="center">
                    <ArrowUpward />
                    <Typography variant="body2" color="textSecondary" component="h2">{abbreviateNumber(ups)}</Typography>
                    <ArrowDownward />
                </Grid>
                <Grid item xs={11}>

                    <CardContent>
                        <Grid item>
                            {thumbnail &&
                                <CardMedia
                                    className={classes.media}
                                    image={thumbnail}
                                    title={title}
                                />}
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Posted by <b>{author}</b> {timeago}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h2">
                                {title}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="h2">
                                {selftext}
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

export default PostDetail;