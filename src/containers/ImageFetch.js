import React, { Component } from 'react';
import axios from '../axios-api';
import ImageFetchService from '../service/ImageFetchService';
import Pagination from "@material-ui/lab/Pagination";
import GridView from '../components/GridView';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {IconButton} from '@material-ui/core/';
/** Container for page wise image fetch and display 
 * - Contains the local state which is updated and passed to the ImageGallery UI component 
 * - Pixabay API request using ImageFetchService methods
 * - material-ui pagination component to support paged view (6 items per page)
 **/
class ImageFetch extends Component {
    state = {
        images: [],
        searchTitle: '',
        page: 1,
        pageSize: 4,
        error: false
    }

    mystyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };

    componentDidMount () {
        console.log('Mount' + this.state.page);
        this.getImages();
    }

    componentWillUnmount () {
        console.log('Unmount' + this.state.page);
    }

    /* API request for images */
    getImages() {
        const { searchTitle, page, pageSize } = this.state;
        const params = this.getRequestParams('cars', page, pageSize);
        ImageFetchService.getAll(params)
            .then( response => {
                this.setState( { images: response.data.hits } );
            } )
            .catch( error => {
                // console.log('ERROR')
                this.setState( { error: true } );
            } );
    }

    /* Construct API request params */
    getRequestParams(searchTitle, page, pageSize) {
        let params = {};

        if (searchTitle) {
        params["q"] = searchTitle;
        }

        if (page) {
        params["page"] = page;
        }

        if (pageSize) {
        params["per_page"] = pageSize;
        }

        return params;
    }

    /* Handle icon clicked events */
    handlePageIconClick = (value) => {
        // console.log(value);
        this.setState(
          {
            page: this.state.page + value,
          }, () => {
            this.getImages();
          }
        );

      }

      /* Handle pagination events */
      handlePageChange = (event, value) => {
        // console.log(value);
        this.setState(
          {
            page: value,
          }, () => {
            this.getImages();
          }
        );

      }

    /* Navigate to Image detail view */
    getImageInfo = (id) => {
        // console.log('getting image details' + this.props);
        this.props.history.push('/' + id);
    }

    render () {
        // console.log(this.state.images)

        return (
            <div>
            <div style={this.mystyle}>
            <IconButton onClick={() => this.handlePageIconClick(-1)}>
            <ArrowBackIosIcon fontSize="large"/> 
            </IconButton>
                <GridView images={this.state.images} onImageInfoClicked={this.getImageInfo}></GridView>
            <IconButton onClick={() => this.handlePageIconClick(1)}>
            <ArrowForwardIosIcon fontSize="large"/> 
            </IconButton>
                     
            </div>
            <div style={this.mystyle}>
                <Pagination count={6} page={this.state.page} variant="outlined" shape="rounded" onChange={this.handlePageChange}/>
            </div>
            </div>
        );
    }
}

export default ImageFetch;