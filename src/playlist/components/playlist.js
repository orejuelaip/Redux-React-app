import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props) {
    // const playlist = props.data.categories[0].playlist;
    // console.log(this.props.data);
    return(
      <div className='Playlist'>
         {
           props.playlist.map((item) => {
             return <Media {...item} key={item.id} handleOpenModal={props.handleOpenModal} />
           })
         }
      </div>
    )
}


export default Playlist;
