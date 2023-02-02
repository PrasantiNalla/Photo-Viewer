import React from "react";  // import React (to provide access to TSX)
import './photoviewer.css';


export function PhotoViewer(props: { url: string }) {
    return (
        <div  >
            <img className="pviewer" src={props.url} />
        </div>
    )
}

