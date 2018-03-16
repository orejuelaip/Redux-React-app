import React from 'react';
import { render } from  'react-dom';
import Playlist from './src/playlist/components/playlist.js';
import data from  './src/api.json';
const homeContainer = document.getElementById('home-container')
// const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo!</h1>;
// type="Audio" tittle="Ques es responsive design" author="Paul Orejuela" image="./images/covers/responsive.jpg"
render(<Playlist data={ data } />,homeContainer);
