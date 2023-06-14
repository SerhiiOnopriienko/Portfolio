import { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

class SearchVideo extends Component{
    constructor(){
        super();
        this.state = {
            searchInput: '',
          };
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInput);
      }
    
    render(){
        return (
            <form style={{ width: '100%' }} onSubmit={this.onFormSubmit}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Search your videos..."
                variant="outlined"
                sx={{ width: '90%' }}
                value={this.state.searchInput}
                onChange={(event) =>
                  this.setState({
                  searchInput: event.target.value,
                  })
                }
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  height: '55px',
                  borderRadius: '0 5px 5px 0',
                  width: '10%',
                }}
              >
                <SearchIcon />
              </Button>
            </form>
        )
    }
}

export default SearchVideo;