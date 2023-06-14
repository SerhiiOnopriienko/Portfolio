import { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getVideosByName  } from './api/youtubeApi';
import SearchVideo from './components/SearchVideo';
import VideoContainer from './components/VideoContainer';
import SuggestedVideos from './components/SuggestedVideos';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.handleClick = this.handleClick.bind(this);
  };
  onSearchSubmit = async (q) => {
    const {
      data: { items }
    } = await getVideosByName(q);
    this.setState({ items });
  };
  handleClick(){
    this.setState(this.state.items.sort((item)=> item.etag.includes(arguments[0]) ? -1 : 0))
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1, padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <SearchVideo onSearchSubmit={this.onSearchSubmit} />
            <VideoContainer items={this.state.items}/>
          </Grid>
          <SuggestedVideos items={this.state.items} handleClick={this.handleClick}/>
        </Grid>
      </Box>
    );
  }
}
