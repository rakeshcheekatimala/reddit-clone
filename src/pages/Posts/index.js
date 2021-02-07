import React, { useState, useRef, useCallback } from 'react';
import PostBar from './components/index';
import { Layout } from './../../components';
import Post from './components/post';
import { Grid, Typography } from '@material-ui/core';
import usePosts from './../../hooks/usePosts';
import { withRouter } from 'react-router-dom';

/**
* @author
* @function returns the list of Posts 
**/

const Posts = (props) => {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedValue, setSelectedValue] = useState('hot');

    const {
        posts,
        hasMore,
        loading,
        error
    } = usePosts(query, pageNumber, selectedValue)

    const observer = useRef()
    const lastpostElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1); // change the pageNumber once the lastpostElement is reached
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const handleSearch = (e) => {
        setQuery(e.target.value)
        setPageNumber(null)
    }

    const onClick = (e, value) => {
        setSelectedValue(value);
    }

    return (
        <Layout value={query} onChange={handleSearch}>
            <PostBar onClick={onClick} selectedValue={selectedValue} />
            <Grid container spacing={3}>
                {
                    posts.map((post, index) => {

                        if (posts.length === index + 1) {
                            return <Grid item key={index} xs={12} ref={lastpostElementRef}><Post {...post.data} history={props.history} /></Grid>
                        } else {
                            return <Grid item key={index} xs={12} ><Post {...post.data} history={props.history} /></Grid>
                        }
                    })
                }
            </Grid>
            <Grid container alignItems="center" justify="center" style={{ marginTop: '1rem' }}>
                {loading && <Typography variant="h5" component="h2">Loading...</Typography>}
            </Grid>
            { error && <Typography>Sorry, Something is not working. Please contact administrator as the server is down...</Typography>}
        </Layout >
    )
}

export default withRouter(Posts);