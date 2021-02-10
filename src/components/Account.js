import React from 'react'
import '../Stylesheets/account.css';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const Account = ({ email, name, chImage }) => {
    return (
        <div className="account_main_div">
            <div className="account_div_one" style={{ display:'flex', flexDirection:'row', alignItems:'center', width:'90%', justifyContent:'space-between' }}>
                <div className="div_one_content_account">
                    <div style={{ fontWeight:550, marginBottom:30, fontSize:18 }}>Account</div>
                    <div style={{ fontWeight:500, fontSize:25, marginBottom:15 }}>Choose how you appear and what you see on YouTube</div>
                    <div style={{ color:'rgb(146,150,147)', fontWeight:300, fontSize:14 }}>Signed in as {email}</div>
                </div>
                <div className="settings_icon_account">
                <Link to="/settings" style={{ textDecoration:'none', color:'white' }}>
                    SETTINGS
                </Link>
                </div>
            </div>
            <div className="hrline_account"></div>
            <div className="account_div_two" style={{ display:'flex', flexDirection:'column' }}>
                <div style={{ fontWeight:500 }}>Your YouTube channel</div>
                <div style={{ color:'rgb(146,150,147)', marginTop:15, marginBottom:20, fontSize:14 }}>This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</div>
                <div className="your_channel">
                    <div>Your channel</div>
                    <div className="channel_info_settings">
                        <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:10 }}>
                            <div><Avatar src={ chImage }/></div>
                            <div style={{ marginLeft:20 }}>{name}</div>
                        </div>
                        <div style={{ color:'rgb(0,187,255)', cursor:'pointer', marginBottom:10, fontSize:14, fontWeight:500 }}>Channel status and features</div>
                        <div style={{ color:'rgb(0,187,255)', cursor:'pointer', marginBottom:10, fontSize:14, fontWeight:500 }}>Create a new channel</div>
                        <div style={{ color:'rgb(0,187,255)', cursor:'pointer', fontSize:14, fontWeight:500 }}>View advanced settings</div>
                    </div>
                </div>
                </div>
            <div className="hrline_account"></div>
            <div className="account_div_three" style={{ display:'flex', flexDirection:'column' }}>
                <div style={{ fontWeight:550, marginBottom:20 }}>Your account</div>
                <div style={{ color:'rgb(146,150,147)', fontSize:14, marginBottom:30 }}>You sign in to your YouTube with your Google account</div>
                <div className="account_div_three_three">
                    <div style={{ fontSize:14 }}>Google Account</div>
                    <div style={{ marginLeft:130 }}>
                        <div style={{ color:'rgb(0,187,255)'}}>View or change your Google Account settings</div>
                        <div style={{ color:'rgb(146,150,147)' }}>You will be redirected to your Google Account page</div>
                    </div>
                </div>
                <div className="account_div_three_four">
                    <div style={{ fontSize:14 }} >Membership</div>
                    <div style={{ marginLeft:155 }}>
                        <div>No membership | <a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none'}}>Get YouTube Premium</a></div>
                        <div style={{ color:'rgb(146,150,147)' }}>YouTube Premium offers uninterrupted music, ad-free videos, and more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
