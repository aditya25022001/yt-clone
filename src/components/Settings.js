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
                <div className="settings_sidebar_elements" id="settings_sidebar_conn_apps">
                <Link to="/settings/connected_apps" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                    Connected apps
                </Link>    
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div className="settings_sidebar_elements" id="settings_sidebar_billing">
                <Link to="/settings/billing_and_payments" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                    Billing and payments
                </Link>
                </div>
                <div className="settings_sidebar_elements" id="settings_sidebar_adv_settings">
                    <Link to="/settings/advanced_settings" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                        Advanced settings
                    </Link>
                </div>
            </div>
            <div id="settings_sidebar_play_per">
            <Link to="/settings/playback_and_performance" style={{ textDecoration:'none', color:'white', cursor:'pointer' }}>
                Playback and performance
            </Link>
            </div>
        </div>
    )
}
