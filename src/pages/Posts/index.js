import React, { useEffect, useState } from 'react'
import PostBar from './components/index';
import { Layout } from './../../components';
import { useParams } from "react-router-dom";
import Post from './components/post';
import { Grid, Typography } from '@material-ui/core';
import { getSubRedditData } from './../../api';

/**
* @author
* @function returns the list of Posts 
**/

const Posts = (props) => {
    let query = useParams();
    let [posts, setPosts] = useState([]);
    let [isError, setIsError] = useState(false);
    useEffect(() => {

        const loadData = async () => {
            try {
                const response = await getSubRedditData(query.name);
                if (response.status === 200) {
                    const { data } = response;
                    setPosts(data.data.children);
                }
            }
            catch (e) {
                setPosts([]);
                setIsError(true);
            }
        }

        loadData();
    }, [])
    return (
        <Layout>
            <PostBar />
            <Grid container spacing={3}>
                {
                    posts.map(post => {
                        return <Grid item key={post.data.title} xs={12}><Post {...post.data} /></Grid>
                    })
                }
                {isError && <Typography>Please contact administrator as the server is down...</Typography>}
            </Grid>
        </Layout>
    )

}

export default Posts