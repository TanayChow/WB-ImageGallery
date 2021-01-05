import React from 'react';
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
      marginBottom: "5px",
      alignItems: 'center'
    },
    gridList: {
      width: '80%',
      height: '50%',
    },
    gridListTile: {
        width: 150,
        height: 100,
        marginLeft: "auto",
        marginRight: "auto"
      },
    arrowStyles: {
        alignItems: 'center'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.60)',
    },
  }));

const GridView = ( props ) => {
    // console.log(props);
    const classes = useStyles();
    const isDataAvailable = props && props.images.length > 0 ? true : false;
    return (
        <div className={classes.root}>  


        {isDataAvailable ? 
            <GridList cellHeight={100} className={classes.gridList} spacing={4}>
            {props.images.map((img) => (
                <GridListTile  style={{ height: 'auto' }} cols={1} key={img.id}>
                <Link to={'/' + img.id} key={img.id}><img style={{ width: '100%' }} src={img.webformatURL} alt={img.tags}/></Link>
                <GridListTileBar
                
                subtitle={<span>{img.user}</span>}
                actionIcon={
                    <IconButton aria-label={`More Info`} className={classes.icon}
                    onClick={() => { props.onImageInfoClicked(img.id) }}>
                    <InfoIcon />
                    </IconButton>
                }
                />
                </GridListTile>

            ))}
        </GridList>
        : <p id='NoData'> No Data </p>}
        


        </div>
    );
};

export default GridView;