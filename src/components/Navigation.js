import React from 'react'
import '../App.css'

export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="goto">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
            <div className="logo">
                <img src ={"../youtube_logo_dark.jpg"}></img>
            </div>
        </div>
    )
}
