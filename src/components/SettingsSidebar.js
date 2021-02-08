import React from 'react'
import '../Stylesheets/settingssidebar.css';

export const SettingsSidebar = () => {
    return (
        <div className="settings_sidebar_container">
            <div className="settings_sidebar_elements" id="settings_sidebar_heading">SETTINGS</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_account">Account</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_notification">Notifications</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_play_per">Playback and performance</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_privacy">Privacy</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_conn_apps">Connected apps</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_billing">Billing and payments</div>
            <div className="settings_sidebar_elements" id="settings_sidebar_adv_settings">Advanced settings</div>
        </div>
    )
}
