import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const KEY = REACT_APP_API_KEY;

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
};
export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular',
    },
  });
};
