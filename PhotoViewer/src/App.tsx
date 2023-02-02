import React, { useState, useEffect, useRef } from 'react'
import { PhotoViewer } from './photoViewer/photoviewer';
import './App.css'
import { imageUrls } from './photoViewer/imageselector';



function App() {
  let [image, setImage] = useState();


  function previewImage() {


  }

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer url="https://picsum.photos/id/600/1600/900.jpg" />
      <h3 className='grid'>Select a image to preview</h3>
      <div className='child'>
        {imageUrls.map((url) => {
          return (
            <img key={url} src={url} onClick={previewImage} />
          )
        })}
      </div>

    </div>
  );
}
export default App;



