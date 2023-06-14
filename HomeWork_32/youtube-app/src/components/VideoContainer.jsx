import { Component } from 'react';

class VideoContainer extends Component{
    render(){
      let source;
      if(!this.props.items.length){
        return <h1>Nothing to display</h1>
      }
      return (
            <>
            <div style={{ paddingTop: '30px', height: '80vh' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${this.props.items[0].id.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h4>{this.props.items[0].snippet.title}</h4>
            </>
            
        )
    }
}

export default VideoContainer;