
import React, {Component} from 'react';
import ImageFetchService from './../service/ImageFetchService';
import { Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DownloadIcon from '@material-ui/icons/GetApp';
import { Icon, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ViewsIcon from '@material-ui/icons/Visibility';
import CommentsIcon from '@material-ui/icons/ChatBubble';

/** Container for image details fetch and display
 * - Contains the local state which is updated with image metadata  
 * - Pixabay API used to fetch details for image using @id 
 **/
class ImageDetails extends Component {
    state = {
        img: []
    }

    componentDidMount () {
        console.log(this.props);
        this.getImageDetails();
    }

    /** Get the image details for the particular image using @id param
     * - @id extracted from the router props
     * - ImageFetchService used to make API request 
    */
    getImageDetails() {
        const params = {id: this.props.match.params.id}
        ImageFetchService.getImageDetails(params)
            .then( response => {
                // console.log('Image details' + response.data.hits[0])
                this.setState( { img: response.data.hits[0] } );
            } )
            .catch( error => {
                console.log('ERROR')
                // this.setState( { error: true } );
            } );
    }

    /** Handle back navigation to the home page */
    onBack = () => {
        console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <img src={this.state.img.webformatURL} alt={this.state.img.tags} /> 
                <Paper variant="outlined" square>
                <Typography variant="body2" color="textSecondary" component="p"> <ViewsIcon fontSize="small"/> {this.state.img.views} </Typography>
                <Typography variant="body2" color="textSecondary" component="p"> <DownloadIcon fontSize="small"/> {this.state.img.views} </Typography>
                <Typography variant="body2" color="textSecondary" component="p"> <span> <ThumbUpAltIcon fontSize="small"/>  {this.state.img.likes}</span> </Typography>
                <Typography variant="body2" color="textSecondary" component="p"> <CommentsIcon fontSize="small"/> {this.state.img.likes} </Typography>
                </Paper>
                <Button color="primary" onClick={this.onBack}> BACK </Button>
            </div>
        )
    }
}

export default ImageDetails;