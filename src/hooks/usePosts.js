import { useEffect, useState } from 'react'
import axios from 'axios';
import { SUBREDDIT_API_URL } from './../api/constants';

export default function usePostSearch(query, pageNumber, selectedValue) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [after, setAfter] = useState(null);

    // reset the posts and after when query is changed
    useEffect(() => {
        setPosts([])
        setAfter(null);
    }, [query, selectedValue])


    useEffect(() => {
        //console.log('inside useEffect,,,,,', selectedValue);
        query = query || 'all'; // default set to all if not empty
        setLoading(true);
        setError(false);
        let cancel;
        let URL = `${SUBREDDIT_API_URL}${query}/${selectedValue}.json`;
        axios({
            method: 'GET',
            url: URL,
            params: { after: after },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPosts(prevPosts => {
                if (res.status === 200) {
                    return [...prevPosts, ...res.data.data.children]
                }
            })
            setHasMore(res.data.data.after !== null); // this will be the used to know and decide whether there are more items 
            setLoading(false);
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber, selectedValue])

    return { loading, error, posts, hasMore, after }
}