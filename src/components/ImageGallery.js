import React from 'react';
import classes from '../components/ImageGallery.css'
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core/';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

/** UI Component for image grid view 
 * - material-ui components used for Gridview and GridTile and IconButton
 * - Image details extracted from the props passed from the parent component
 **/
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "lightgrey",
      marginBottom: "10px"
    },
    gridList: {
      width: 500,
      height: 750,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Gallery = ( props ) => {
    // console.log(props);
    const classes = useStyles();
    return (
        <div className={classes.root}>  
            <GridList cellHeight={100} className={classes.gridList} spacing={8}>
            {props.images.map((img) => (
                <GridListTile  cols={1} key={img.id}>
                <Link to={'/' + img.id} key={img.id}><img src={img.previewURL} alt={img.tags} /> </Link>
                <GridListTileBar
                title='Created By'
                subtitle={<span>by: {img.user}</span>}
                actionIcon={
                    <IconButton aria-label={`info about image`} className={classes.icon}
                    onClick={() => { props.onImageInfoClicked(img.id) }}>
                    <InfoIcon />
                    </IconButton>
                }
                />
                </GridListTile>

            ))}
        </GridList>
        </div>
    );
};

export default Gallery;