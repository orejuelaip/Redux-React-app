import React,{ Component } from 'react';
import '../components/video.css';
class Video  extends Component{

  handleToggleClick() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
      if ( nextProps.pause !==  this.props.pause ) {
          this.handleToggleClick();
      }
  }

  setRef = element => {
    this.video = element;
  }

  render() {
    const {
      handleLoadedMetadata,
    } = this.props;

    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={this.props.handleLoadedMetadata}
          onTimeUpdate={this.props.handleTimeUpdate}
          onSeeking={this.props.handleSeeking}
          onSeeKed={this.props.handleSeeKed}
        />
      </div>
    )
  }
}

export default Video
