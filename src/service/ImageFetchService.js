
import axios from "axios";
var API_KEY = '6473511-0417f2cad683f1bee54cafe15';
var URL = "https://pixabay.com/api/?key="+API_KEY
class ImageGalleryDataService {
  getAll(params) {
    console.log(params);
    return axios.get(URL, { params });
  }

  getImageDetails(params) {
    console.log(params);
    return axios.get(URL, { params });
  }
}

export default new ImageGalleryDataService();