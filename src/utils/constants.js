const GOOGLE_API_KEY = import.meta.env.VITE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&part=snippet,statistics&id=`;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&type=video&maxResults=50&q=`;



 //export const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search";


//export const YOUTUBE_SEARCH_API = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&xhr=t&xssi=t&gl=in&q="



