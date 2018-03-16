import React from 'react';
import { render } from  'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist.js';
import data from  '../api.json';
const homeContainer = document.getElementById('home-container')
// const holaMundo = <h1>Hola Mundo!</h1>;
//type="Audio" tittle="Ques es responsive design" author="Paul Orejuela" image="./images/covers/responsive.jpg"
render(<Home data={data} />, homeContainer);

