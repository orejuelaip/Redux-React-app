import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media  extends PureComponent {
  state = {
      author: 'Paul Orejuela'
    }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  //   // this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick = (event) => {
  //     // console.log(this.props.tittle)
  //     this.setState({
  //       author: 'Ricardo Celis'
  //     })
  // }
   render () {
     return (
       <div className="Media" onClick={this.props.handleOpenModal}>
         <div className="Media-cover">
            <img src={this.props.cover} alt=""  width={260} height={160} />
            <h3 className="Media-title">{this.props.title}</h3>
            <p className="Media-author">{this.props.author}</p>
         </div>
       </div>
     )
   }
}
//Validar propiedades
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio']),
}

export default Media;
