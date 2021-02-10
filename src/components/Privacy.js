import React from 'react'
import Switch from '@material-ui/core/Switch';
import '../Stylesheets/privacy.css';
import { Link } from 'react-router-dom';

export const Privacy = () => {
    return (
        <div className="main_privacy">
            <div className="privacy_one" style={{ marginBottom:'3%', display:'flex', flexDirection:'row', justifyContent:'space-between', width:'90%' }}>
                <div>
                    <div style={{ fontWeight:550, fontSize:18, marginBottom:'4%' }}>Privacy</div>
                    <div style={{ fontWeight:500, fontSize:25, marginBottom:'1%' }}>Manage what you share on YouTube</div>
                    <div style={{ color:'gray', fontSize:14, marginBottom:'0.5%' }}>Choose who can see your saved playlists and subscriptions</div>
                    <div style={{ color:'gray', fontSize:14 }}>Review <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>YouTube Terms of Service</a> and <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>Google Privacy Policy</a></div>
                </div>
                <div className="settings_icon_privacy">
                    <Link to="/settings" style={{ textDecoration:'none', color:'white' }}>
                        SETTINGS
                    </Link>
                </div>
            </div>
            <div className="hrline_privacy"></div>
            <div className="privacy_two" style={{ display:'flex', flexDirection:'column', marginTop:'2%' }} >
                <div style={{ display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between' }}>
                    <div style={{ fontWeight:550, flex:0.2 }}>Playlists and subscriptions</div>
                    <div>
                        <div style={{ display:'flex', flexDirection:'row', marginBottom:'4%'}}>
                            <Switch color='primary' checked/>
                            <div>
                                <div><b>Keep all my saved playlists private</b></div>
                                <div style={{ color:'gray', fontSize:14 }}>Playlists created by others won’t appear on your channel. Playlists created by you have separate, individual privacy settings. <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>Learn more</a></div>
                            </div>
                        </div>
                        <div style={{ display:'flex', flexDirection:'row', marginBottom:'5%' }}>
                            <Switch color='primary' checked/>
                            <div>
                                <div><b>Keep all my subscriptions private</b></div>
                                <div style={{ color:'gray', fontSize:14 }}>Your subscriptions will not be visible to others. Manage your subscriptions <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>here</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'row', width:'90%',justifyContent:'space-between' }}>
                    <div style={{ fontWeight:550, flex:0.2 }}>Ads on YouTube</div>
                    <div style={{ color:'gray', fontSize:14, flex:0.7 }}>You may see ads on YouTube based on general factors, like the topic of a video. The ads you see may also depend on your <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>Google Ads Settings</a>. To learn more about how ads work for family accounts with kids, visit the <a href="" style={{ color:'rgb(0,187,255)',textDecoration:'none' }}>Google for Families Help Center</a>.</div>
                </div>
            </div>
        </div>
    )
}
