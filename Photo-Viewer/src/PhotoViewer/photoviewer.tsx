import React from "react";  // import React (to provide access to TSX)
import './photoviewer.css';


export function PhotoViewer(props: { url: string }) {
    return (
        <div className="pviewer" >
            <img src={props.url} />
        </div>
    )
}