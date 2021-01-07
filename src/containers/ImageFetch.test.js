import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageFetch from './ImageFetch';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core/';
import axios from 'axios';
import ImageDataService from '../service/ImageFetchService';



configure({    adapter : new Adapter()})


describe('Testing <ImageFetch> pagination', () => {
    it('Should render correct page of items if previous / forward button clicked', ()=> {

        const wrapper = shallow(<ImageFetch />);
        expect(wrapper.find(IconButton)).toHaveLength(2);
        var prevPageVal = wrapper.state('page');
        
        // Simulate next button click
        wrapper.find(IconButton).at(1).simulate('click');
        expect(wrapper.state('page')).toEqual(prevPageVal + 1);
        // Simulate prev button click
        wrapper.find(IconButton).at(0).simulate('click');
        expect(wrapper.state('page')).toEqual(prevPageVal);
    })
})
