
import React, {Component} from 'react';
import ImageFetchService from './../service/ImageFetchService';
import classes from './ImageDetails.css';
import { Button, Divider } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Avatar from '@material-ui/core/Avatar';
import DownloadIcon from '@material-ui/icons/GetApp';
import { Icon, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
        // console.log(this.props);
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
        // console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        const containerStyle = {
            display: "flex",
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: "lightgrey",
            width: '100%',
            height: '100%'
          };
          const userImageStyle = {
            borderRadius: '50%'
          };
        return (
            <div>
            <div style={containerStyle}>
                
                <Paper variant="outlined" square>
                
                <img style={userImageStyle} src={this.state.img.userImageURL} alt={this.state.img.user} />
                <Divider />

                <div>
                <AccountCircleIcon/> 
                <Typography  variant="body2" color="textPrimary" component="p"> {this.state.img.user} </Typography> 
                </div>
                <Divider />

                <div>
                <ViewsIcon fontSize="small"/> 
                <Typography variant="body2" color="textPrimary" component="p"> {this.state.img.views} </Typography> 
                </div>
                <Divider />
                
                <div>
                <DownloadIcon fontSize="small"/>
                <Typography variant="body2" color="textPrimary" component="p"> {this.state.img.downloads} </Typography>
                </div>
                <Divider />

                <div>
                <ThumbUpAltIcon fontSize="small"/>  
                <Typography variant="body2" color="textPrimary" component="p"> {this.state.img.likes} </Typography>
                </div>
                <Divider />

                <div>
                <CommentsIcon fontSize="small"/> 
                <Typography variant="body2" color="textPrimary" component="p"> {this.state.img.comments} </Typography>
                </div>
                <Divider />

                </Paper>
                <img style={containerStyle} src={this.state.img.webformatURL} alt={this.state.img.tags} /> 
            </div>


            <Button color="primary" onClick={this.onBack}> BACK </Button>
            </div>
        )
    }
}

export default ImageDetails;