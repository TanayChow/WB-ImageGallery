import axios from 'axios';
var API_KEY = '6473511-0417f2cad683f1bee54cafe15';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
});

export default instance;