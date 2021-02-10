import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import '../Stylesheets/connectTemplate.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

export const ConnectGameTemplate = ({ gameImage, accountImage, name }) => {
    return (
        <div className="game_template">
            <div className="game_template_images" >
                <div className="account_images_template" style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', flex:0.8 }}>
                    <Avatar src={accountImage}/>
                    <SettingsInputAntennaIcon style={{ fontSize:15, color:'black',backgroundColor:'rgb(0,174,255)', borderRadius:'50%', padding:3, marginLeft:'3%', marginRight:'3%' }} />
                    <Avatar src={gameImage}/>
                </div>
                <div>
                    <Link to="/settings/connected_apps" style={{ textDecoration:'none', color:'white' }}>
                        <CloseIcon />
                    </Link>
                </div>
            </div>
            <div className="template_info" style={{ display:'flex', flexDirection:'column',alignItems:'center'}}>
                <div style={{ paddingTop:'4%', fontWeight:500, fontSize:17, paddingLeft:'5%', paddingRight:'5%', textAlign:'justify' }}>Connect accounts and watch approved events and videos for a chance to win in-game rewards</div>
                <div className="hrline_connect"></div>
                <div style={{ color:'gray', fontSize:13, paddingLeft:'5%', paddingRight:'5%', textAlign:'left', paddingBottom:'6%' }}>By connecting to Activision ID, 
                    Activision can access information 
                    about related game activity you view 
                    across YouTube anytime the "connected" 
                    status appears in video player settings. 
                    They may also share info with YouTube about 
                    your game account and progress on their platform, 
                    and they will administer all rewards. <a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none' }}>Learn more</a>. 
                    See also <a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none' }}>Privacy Policy</a> for Activision. You’re connecting 
                    as {name}. You can disconnect anytime in your YouTube Settings.
                </div>
                <button className="template_button_connect">CONNECT</button>
            </div>
        </div>
    )
}
