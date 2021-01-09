import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridView from './GridView';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core/';
import axios from 'axios';
import { MemoryRouter } from 'react-router';
import ImageDataService from '../service/ImageFetchService';
import App from './../App';
import ImageFetch from './../containers/ImageFetch';
import ImageDetails from './../containers/ImageDetails';
import { render } from "react-dom";
import { createMemoryHistory } from "history";
import { act } from 'react-dom/test-utils';

configure({    adapter : new Adapter()})
jest.mock('axios');
let response = {
    hits: [
        {
            "id": 195893,
            "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
            "type": "photo",
            "tags": "blossom, bloom, flower",
            "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
            "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
            "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
            "imageWidth": 4000,
            "imageHeight": 2250,
            "imageSize": 4731420,
            "views": 7671,
            "downloads": 6439,
            "favorites": 1,
            "likes": 5,
            "comments": 2,
            "user_id": 48777,
            "user": "Josch13",
            "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        },
        {
            "id": 195894,
            "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
            "type": "photo",
            "tags": "blossom, bloom, flower",
            "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
            "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
            "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
            "imageWidth": 4000,
            "imageHeight": 2250,
            "imageSize": 4731420,
            "views": 7671,
            "downloads": 6439,
            "favorites": 1,
            "likes": 5,
            "comments": 2,
            "user_id": 48777,
            "user": "Josch13",
            "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        },
        {
            "id": 195895,
            "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
            "type": "photo",
            "tags": "blossom, bloom, flower",
            "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
            "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
            "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
            "imageWidth": 4000,
            "imageHeight": 2250,
            "imageSize": 4731420,
            "views": 7671,
            "downloads": 6439,
            "favorites": 1,
            "likes": 5,
            "comments": 2,
            "user_id": 48777,
            "user": "Josch13",
            "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        },
        {
            "id": 195896,
            "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
            "type": "photo",
            "tags": "blossom, bloom, flower",
            "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
            "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
            "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
            "imageWidth": 4000,
            "imageHeight": 2250,
            "imageSize": 4731420,
            "views": 7671,
            "downloads": 6439,
            "favorites": 1,
            "likes": 5,
            "comments": 2,
            "user_id": 48777,
            "user": "Josch13",
            "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        }
    ]
  }

describe('Testing <GridView>', () => {
    it('Should render "No Data" if no items returned from API', ()=> {
        const wrapper = shallow(<GridView images={[]}/>);
        expect(wrapper.find(GridListTile)).toHaveLength(0);
        expect(wrapper.find('#NoData')).toHaveLength(1);
    })
})

describe('Testing <GridView> with mock data',  () => {
    it('Should render items', async ()=> {
        axios.get.mockResolvedValue(response);
        const data = await ImageDataService.getAll({});
        // console.log(data);
        const wrapper = shallow(<GridView images={data.hits}/>);

        expect(wrapper.find(GridListTile)).toHaveLength(4);
        expect(wrapper.find('#NoData')).toHaveLength(0);
    })
})

/*describe('Testing <GridView> navigation events', () => {
    it('Should navigate to correct location for click events on image and info icon', async () => {
        axios.get.mockResolvedValue(response);
        const data = await ImageDataService.getAll({});
        // console.log(data);
        
        // const wrapper = shallow(<GridView images={data.hits}/>);
        const history = createMemoryHistory();
        const root = document.createElement('div');
        render(
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>,
            root
          );
          act(() => {
            // Find the link (perhaps using the text content)
            const detailsLink = document.getElementById('detailsIcon');
            // Click it
            detailsLink.dispatchEvent(new MouseEvent("click"));
          });
        expect(history.location.pathname).toBe("/:123");
        //expect(wrapper.find(GridListTileBar)).toHaveLength(4);
        //wrapper.find(GridListTileBar).at(0).simulate('click');

    })
})*/