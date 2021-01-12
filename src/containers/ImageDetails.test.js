import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Divider} from '@material-ui/core/';
import axios from 'axios';
import ImageDataService from '../service/ImageFetchService';
import ImageDetails from './ImageDetails';
import { Icon, Typography } from '@material-ui/core';
configure({    adapter : new Adapter()})

jest.mock('axios');
let response = {
    hits: 
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
        }
    }

describe('Testing <ImageDetails> page', () => {
    it('Should render correct metadata', async()=> {
        axios.get.mockResolvedValue(response);
        const data = await ImageDataService.getImageDetails({id: 195893});
        const wrapper = shallow(<ImageDetails />,  { disableLifecycleMethods: true });
        wrapper.setState({img: data.hits});
        expect(wrapper.find('img')).toHaveLength(2);
        expect(wrapper.find(Typography)).toHaveLength(5);
    })
})
