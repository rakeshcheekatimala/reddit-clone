import { SUBREDDIT_API_URL } from './constants';
import axios from 'axios';

export const getSubRedditData = (subbredit_name_prefix) => {
    console.log("URL", URL);
    return axios.get(`${SUBREDDIT_API_URL}${subbredit_name_prefix}/.json`);
}