import { ACCESS_KEY } from '../config/config';
import axios from 'axios';

const youtubeAPI = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
  });
  
  export function getVideosByName(q, maxResults = 6) {
    return youtubeAPI.get('/search', {
      params: {
        key: ACCESS_KEY,
        part: 'snippet',
        maxResults,
        q,
      },
    });
  }
  