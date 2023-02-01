import { useState } from 'react'
import { PhotoViewer } from './PhotoViewer/photoviewer';
import './App.css'
import { ImageSelector } from './PhotoViewer/imageselector';

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer url="https://picsum.photos/id/600/1600/900.jpg" />
      <h4>Select Image</h4>
      <ImageSelector />
    </div>
  );
}
export default App;