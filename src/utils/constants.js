import BgImage from '../assets/images/home-bg.jpg';
export const BgScreen = BgImage;
export const LOGO = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg';
export const USER_AVATAR = 'https://redux.js.org/img/redux.svg';
export const BANNER_IMG_CDN_URL = "https://image.tmdb.org/t/p/original";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
};
export const MoviePosterCDN_URL = 'https://image.tmdb.org/t/p/w200/'

export const SUPPORTED_LANGUAGE = [
  {
    identifier : 'en',
    name: 'English'
  },
  {
    identifier: 'hindi',
    name: 'Hindi'
  },
  {
    identifier: 'spanish',
    name: 'Spanish'
  }
]

export const GPT_KEY = process.env.REACT_APP_GPT_KEY;