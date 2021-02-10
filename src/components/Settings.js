import React from 'react'
import '../Stylesheets/settings.css';
import { Link } from 'react-router-dom';

export const Settings = () => {
    return (
        <div className="settings_sidebar_container">
            <div id="settings_sidebar_heading">SETTINGS</div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_account">
                <Link to="/settings/account" style={{ textDecoration:'none', color:'white' }}>
                    Account
                </Link>
                </div>
                <div className="settings_sidebar_elements" id="settings_sidebar_notification">
                <Link to="/settings/notifications" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                    Notifications
                </Link>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_privacy">
                <Link to="/settings/privacy" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                    Privacy
                </Link>
                </div>
                <div className="settings_sidebar_elements" id="settings_sidebar_conn_apps">Connected apps</div>
            </div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_billing">Billing and payments</div>
                <div className="settings_sidebar_elements" id="settings_sidebar_adv_settings">Advanced settings</div>
            </div>
            <div id="settings_sidebar_play_per">
            <Link to="/settings/playback_and_performance" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                Playback and performance
            </Link>
            </div>
        </div>
    )
}
