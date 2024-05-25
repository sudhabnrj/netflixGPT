import BgImage from '../assets/images/home-bg.jpg';
import mainLogo from '../assets/images/Netflix_Logo_PMS.png';
import avatar from '../assets/images/avatar.png';
import noPoster from '../assets/images/no-poster.png';
import errorImg from '../assets/images/404.png'
export const BgScreen = BgImage;
// export const LOGO = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg';
export const LOGO = mainLogo;
export const USER_AVATAR = avatar;
export const BANNER_IMG_CDN_URL = "https://image.tmdb.org/t/p/original";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
};
export const MoviePosterCDN_URL = 'https://image.tmdb.org/t/p/original'
export const MovieNoPoster = noPoster;
export const notFound = errorImg;

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

// export const GPT_KEY = process.env.REACT_APP_GPT_KEY;