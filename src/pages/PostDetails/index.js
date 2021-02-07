import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Layout } from './../../components';
import axios from 'axios';
import { SUBREDDIT_API_URL } from './../../api/constants';
import { Grid } from '@material-ui/core';
import PostDetail from './components';
/**
* @author
* @function PostDetails
**/

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    let urlHandle = props.location.pathname;
    //console.log('inside PostDetails...', props);

    useEffect(() => {
        const loadPostDetails = async () => {
            try {
                let handle = urlHandle.split("/r/")[1];
                //console.log('handle', handle, 'SUBREDDIT_API_URL', SUBREDDIT_API_URL);
                let URL = `${SUBREDDIT_API_URL}${handle}.json`;
                let results = await axios.get(URL);
                if (results.status === 200) {
                    if (results.data[0]) {
                        setPost(results.data[0].data.children[0]);
                        setIsLoaded(true);
                    }
                }
            }
            catch (e) {
                setIsLoaded(false);
            }
        }

        loadPostDetails();
    }, [urlHandle]);

    return (
        <Layout>
            {isLoaded ? (<Grid container spacing={3}>
                <Grid item key={post.title} xs={12} ><PostDetail {...post.data} /></Grid>
            </Grid>) : <h2>Loading...</h2>}
        </Layout >
    )

}

export default withRouter(PostDetails);