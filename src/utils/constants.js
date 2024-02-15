export const userAvatar = `https://cdn-icons-png.flaticon.com/512/9131/9131529.png`
export const baseImageUrl = "https://image.tmdb.org/t/p/w500/"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
}

export const SUPPORTED_LANGUAGE = [ {identifier:"en", name:"English"}, {identifier:"hin", name:"Hindi"},{identifier:"ger", name:"German"}]
//plabdhe acc.

