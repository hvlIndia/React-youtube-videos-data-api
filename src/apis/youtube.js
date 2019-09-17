import axios from 'axios';


const KEY = 'AIzaSyANSTM4YrTg5PG_3Pu8UCCilQaz06jzB3k';


export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY, 
    forDeveloper: true,
    
    

}
});


