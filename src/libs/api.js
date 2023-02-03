/* const API_KEY='AIzaSyAAdomovJFlj4A8ZS0oL0nxdlHZj9CVOlg'; */
const API_KEY='AIzaSyD6Z2P4FscE-QEIBiCDX-43yksj0ZQU6h4';

export const videoUrl =`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`


export function searchUrl(keyword){
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_KEY}`
}

export function channelUrl(channelId){
    return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
}


