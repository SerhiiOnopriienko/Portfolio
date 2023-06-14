import { Component } from "react";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class SuggestedVideos extends Component {
    render(){
        return (
            <Grid item md={4} xs={12}>
            <h3 style={{ marginBottom: '42px' }}>Suggested videos:</h3>
            <ImageList
              sx={{
                width: '100%',
                height: '77vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
                {this.props.items.slice(1).map((item) => (
                  <ImageListItem key={item.etag} onClick={()=> this.props.handleClick(item.etag)}>
                  <img
                    src={item.snippet.thumbnails.high.url}
                    alt={item.snippet.title}
                    loading="lazy"
                    style={{ height: '146px' }}
                  />
                  <ImageListItemBar
                    title={item.snippet.description}
                    subtitle={item.snippet.channelTitle}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        )
    }
}

export default SuggestedVideos;