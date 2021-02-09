import React from 'react'
import '../Stylesheets/settingssidebar.css';
import { Link } from 'react-router-dom';

export const SettingsSidebar = () => {
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
                <Link to="/settings/account" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                    Notifications
                </Link>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_privacy">Privacy</div>
                <div className="settings_sidebar_elements" id="settings_sidebar_conn_apps">Connected apps</div>
            </div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_billing">Billing and payments</div>
                <div className="settings_sidebar_elements" id="settings_sidebar_adv_settings">Advanced settings</div>
            </div>
            <div id="settings_sidebar_play_per">Playback and performance</div>
        </div>
    )
}
