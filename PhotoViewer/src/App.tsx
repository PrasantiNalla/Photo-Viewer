import React, { useState, useEffect, useRef } from 'react'
import { PhotoViewer } from './photoViewer/photoviewer';
import './App.css'
import { imageUrls } from './photoViewer/imageselector';



function App() {
  let [image, setImage] = useState(imageUrls[5]);

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <div>
        <PhotoViewer url={image} />
      </div>
      {/* <form className="toggleBar" method="post" action={image + 1}>
        <button className="next">Next</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="previous">Previous</button>

      </form> */}
      <h3 className='grid'>Select a image to preview</h3>
      <div className='child'>
        {imageUrls.map((url) => {
          return (
            <img className='selImg' key={url} src={url} onClick={() => setImage(url)} />
          )
        })}
      </div>
    </div>
  );
}
export default App;



