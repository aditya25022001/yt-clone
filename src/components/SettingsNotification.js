import React from 'react'
import { NotificationElement } from './NotificationElement';
import '../Stylesheets/notifications.css';
 
export const SettingsNotification = ({ email }) => {
    return (
        <div className="settings_notification">
            <div className="notifications_notification" style={{ display:'flex', flexDirection:'row'}}>
                <div className="part_one_notification">
                    <div style={{ fontWeight:550, fontSize:17 }}>Notifications</div>
                    <div style={{ fontWeight:500, marginTop:25, fontSize:25 }}>Choose how and when to be notified</div>
                    <div style={{ color:'gray', fontSize:14, marginTop:15 }}>Select push and email notifications you'd like to receive</div>
                </div>
                {/* <div><img 
                    src="https://www.pngitem.com/pimgs/m/494-4949849_email-clipart-envelopeclip-envelope-icon-hd-png-download.png" 
                    style={{ 
                        borderRadius:100, 
                        width:150, 
                        height:150 
                    }} 
                    />
                </div> */}
            </div>
            <div className="hrline_notif"></div>
            <div className="notification_general" style={{ display:'flex', flexDirection:"column", justifyContent:'space-evenly'}}>
                <div style={{ fontWeight:550, fontSize:15}} className="notif_general">General</div>
                <div style={{ color:'gray', fontSize:14, marginTop:15, marginBottom:15 }} className="notif_general_two">Manage your mobile and desktop notifications</div>
                <div className="general_preference" style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly',marginTop:30 }}>
                    <div style={{ fontWeight:500 }}>Your preferences</div>
                    <div className="options" style={{ fontSize:14 }} className="options">
                        <NotificationElement heading="Subscriptions" description="Notify me about activity from the channels I'm subscribed to" checked="true" />
                        <NotificationElement heading="Recommended videos" description="Notify me of videos I might like based on what I watch" checked="true"/>
                        <NotificationElement heading="Activity on my channel" description="Notify me about comments and other activity on my channel or videos" checked="true"/>
                        <NotificationElement heading="Activity on my comments" description="Notify me about activity on my comments on others’ videos" checked="true"/>
                        <NotificationElement heading="Replies to my comments" description="Notify me about replies to my comments" checked="true"/>
                        <NotificationElement heading="Mentions" description="Notify me when others mention my channel" checked="true"/>
                        <NotificationElement heading="Shared content" description="Notify me when others share my content on their channels" checked="true"/>
                    </div>
                </div>
            </div>
            <div className="hrline_notif"></div>
            <div className="notifications_email">
                <div style={{ fontWeight:550 }}>Email notifications</div>
                <div style={{ color:'gray', fontSize:14, marginTop:15 }}>Your emails are sent to <b>{email}</b>. To unsubscribe from an email, click the "Unsubscribe" link at the bottom of it. Learn more about emails from YouTube.</div>
                <div style={{ marginTop:20, display:'flex', flexDirection:'column' }}>
                    <div style={{ display:'flex', flexDirection:'row', marginTop:15 }}>
                        <div className="perm_notif">Permission</div>
                        <NotificationElement heading="Send me emails about my YouTube activity and updates I requested" description="If this setting is turned off, YouTube may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters" checked="true"/>
                    </div>
                    <div style={{ display:'flex', flexDirection:'row', marginTop:25 }}>
                        <div className="your_pref_notif">Your preferences</div>
                        <div>   
                            <NotificationElement heading="General product updates" description="Announcements and recommendations" checked=""/>
                            <NotificationElement heading="Creator updates and announcements" description="Product announcements, creator events, and personalized tips to grow your YouTube channel" checked=""/>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'row' }}>
                    <div>Language</div>
                    <div style={{ color:'gray' }} className="notif_language">
                        <div className="lang_name">
                            <div style={{ fontSize:13 }}>Email language</div>
                            <div>English ( India )</div> 
                        </div>
                        <div>This setting applies to emails only</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
