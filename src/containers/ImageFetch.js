import React, { Component } from 'react';
import axios from '../axios-api';
import Gallery from '../components/ImageGallery'
import ImageFetchService from '../service/ImageFetchService';
import Pagination from "@material-ui/lab/Pagination";

class ImageFetch extends Component {
    state = {
        images: [],
        searchTitle: '',
        page: 1,
        pageSize: 6,
        error: false
    }

    mystyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };

    componentDidMount () {
        console.log(this.props);
        this.getImages();
    }

    getImages() {
        const { searchTitle, page, pageSize } = this.state;
        const params = this.getRequestParams('cars', page, pageSize);
        ImageFetchService.getAll(params)
            .then( response => {
                this.setState( { images: response.data.hits } );
            } )
            .catch( error => {
                console.log('ERROR')
                this.setState( { error: true } );
            } );
    }

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

    handlePageChange = (event, value) => {
        console.log(value);
        this.setState(
          {
            page: value,
          }, () => {
            this.getImages();
          }
        );

      }

    getImageInfo = (id) => {
        // console.log('getting image details' + this.props);
        this.props.history.push('/' + id);
    }

    render () {
        console.log(this.state.images)

        return (
            <div >
            <Gallery images={this.state.images} onImageInfoClicked={this.getImageInfo}></Gallery>
            <div style={this.mystyle}>
            <Pagination 
                        count={6}
                        page={this.state.page}
                        variant="outlined"
                        shape="rounded"
                        onChange={this.handlePageChange}
                        />
            </div>                        
            </div>
        );
    }
}

export default ImageFetch;