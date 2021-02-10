import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../Stylesheets/connectTemplate.css';
import { Link } from 'react-router-dom';

export const ConnectedAppsElement = ({ gameImage, gameName }) => {
    
    const [prevName, newName] = useState('')

    return (
        <div className="game_template_c_a">
            <Avatar src={gameImage}/>
            <div style={{ marginLeft:'2%', marginRight:'10%' }}>
                <div style={{ fontWeight:550, fontSize:15 }}>{gameName}</div>
                <div style={{ color:'gray', fontSize:14 }}>Connect accounts and watch approved events and videos for a chance to win in-game rewards</div>
            </div>
            <div className="connect_button_element" onClick={ () => newName({gameName}) }>
                <Link to="/settings/connected_apps/connect" style={{ textDecoration:'none', color:'rgb(0,174,255)' }}>
                    CONNECT
                </Link>
            </div>
        </div>
    )
}
