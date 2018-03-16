import React , {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import PlayPause from '../components/play-pause';
import Title from '../components/title';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';


class VideoPlayer extends Component {

  state = {
    pause: true,
    duration: 0,
    currentTime : 0,
    loadding: false,
  }

  handleToggleClick = (event) => {
    this.setState({
      pause: !this.state.pause,
    })
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video =  event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  handleTimeUpdate = event => {
     this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event =>{
    this.video.currentTime =   event.target.value
  }

  handleSeeking = event =>{
    this.setState({
      loadding: true
    })
  }

  handleSeeKed = event =>{
    this.setState({
        loadding: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }
  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      // mando a full screen
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
      // salgo del full screen
    }
  }
  render() {
    return(
      <VideoPlayerLayout>
        <Title
          title="Video Nuevo"
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.handleToggleClick}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.props.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
           handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
           handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loadding} 
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
