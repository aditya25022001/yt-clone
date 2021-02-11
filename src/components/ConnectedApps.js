import React from 'react'
import { Link } from 'react-router-dom';
import { ConnectedAppsElement } from './ConnectedAppsElement';
import '../Stylesheets/connectTemplate.css';

export const ConnectedApps = () => {
    return (
        <div className="main_div_connected_apps">
            <div className="div_connected_one">
                <div style={{ marginBottom:'3%' }}>
                    <div style={{ fontWeight:550, marginBottom:'8%', fontSize:18 }}>Connected apps</div>
                    <div style={{ fontSize:25, marginBottom:'3%' }}>Expand your experience</div>
                    <div style={{ color:'gray', fontSize:14 }}>Connect YouTube with other apps and watch more easily</div>
                    <div style={{fontSize:14}}><a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none' }}>See all sites authorized to access your Google Account</a></div>
                </div>
                <div className="settings_icon_connected_apps">
                    <Link to="/settings" style={{ textDecoration:'none', color:'white' }}>
                        SETTINGS
                    </Link>
                </div>
            </div>
            <div className="hrline_connected_apps"></div>
            <div>
                <ConnectedAppsElement 
                    gameImage="https://yt3.ggpht.com/9OFmTb0K1ltYfSsDGtzm0QnrFUARMMZZKEBag3k6PtUMnarIVbXmE1ML7fYO5ymGT7vrIKI=s176-nd"
                    gameName="Activision ID"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/2qhXXZm7rURHrwCBwuzUoe3lAVRWtq4D9fSj5A9PkJmCz8dBX5WsWdbWmQPsP0YI8_hOwk0=s176-nd"
                    gameName="Epic Games"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/qYwCY37vA51A2-m7OeWQKK-g3JJ1FoDBDzbp2mkA0oMfOf5pF3V7GXFE5m0kkrY5MMccep0=s176-nd"
                    gameName="Garena"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/mL4dB3T4SjBZZabdH6yutbfmNRzLAV4TDOc7u_OSRM6sDVlX2ZRJQu1gdagfmmyrnlcoNp0=s176-nd"
                    gameName="MLBB"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/SriroSkta1DQUgR_EhdoPRjbUe4baqp0uJpSVHUN2Ad7Ne7I5_AG7-ZB0IL4B2rB7A-j_r0=s176-nd"
                    gameName="Knives Out"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/7EabjEWAQXDfaJhXN4V2BMXY7sYVaNa3NVYNtqHkPTlKv0eU8r4SkbPeDIeXnBVaRKyZcug=s176-nd"
                    gameName="PUBG"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/H_o6753e7ipKV6dsizTyTUaj2VfGC-cUXza44qunmFNZY6bej8uZfOM4TXo75Dgcq1oVCsk=s176-nd"
                    gameName="PUBG MOBILE"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/AdwMGs3qF6SGNeFiMB7AwdSRe-MOu9Vf2IGluvCakJ3Fcy9DrJozeQfehihqzpAkTXNA4g=s176-nd"
                    gameName="Riot Games"
                />
                <ConnectedAppsElement
                    gameImage="https://yt3.ggpht.com/o87hJbozgLcNjqoYv_6MP5DDtPKqypMRy5UP6qxoRnhl1QsedFCWz5AG0G6_Z787yOgeAOFD=s176-nd"
                    gameName="Supercell ID"
                />
            </div>
        </div>
    )
}
