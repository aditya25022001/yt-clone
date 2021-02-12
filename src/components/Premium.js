import React, { useState } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../Stylesheets/premium.css';

export const Premium = () => {

    const [downDown, upDown] = useState(<ExpandMoreIcon/>);
    const [downMem, upMem] = useState(<ExpandMoreIcon/>);
    const [downBack, upBack] = useState(<ExpandMoreIcon/>);
    const [downPrem, upPrem] = useState(<ExpandMoreIcon/>);
    const [premiumPrev, premiumFin] = useState(true);
    const [downloadPrev, downloadFin] = useState(true);
    const [membershipPrev, membershipFin] = useState(true);
    const [backGroundPrev, backGroundFin] = useState(true); 
    const [initStylePrem, finalStylePrem] = useState({
        display:'none',
    })
    const [initStyleDown, finalStyleDown] = useState({
        display:'none',
    })
    const [initStyleBack, finalStyleBack] = useState({
        display:'none',
    })
    const [initStyleMemb, finalStyleMemb] = useState({
        display:'none',
    })
    const fin = {
        display:'flex',
        color:'gray',
        paddingTop:'3%',
        fontWeight:500,
        fontSize:17
    }
    const finPrem = {
        display:'flex',
        flexDirection:'column',
        color:'gray',
        paddingTop:'3%'
     }
    
    return (
        <div className="main_div_premium_sidebar">
            <div className="first_div_premium">
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'3%' }}>
                    <YouTubeIcon style={{ color:'red', fontSize:90 }} />
                    <div style={{ fontFamily:'oswald', fontSize:50, fontWeight:600 }}>YouTube Premium</div>
                </div>
                <div style={{ fontSize:30 }} >YouTube and YouTube Music ad-free,</div>
                <div style={{ fontSize:30, marginBottom:'4%' }} >offline, and in the background</div>
                <button className="button_buy_premium">GET YOUTUBE PREMIUM</button>
                <div style={{ fontSize:25 }}>Prepaid and subscription plans available. Prices start at</div>
                <div style={{ fontSize:25, marginBottom:'3%' }}>{String.fromCharCode(8377)}129.00./month. Free trials available with subscription plans only.</div>
                <div style={{ fontFamily:'sans-serif', fontSize:14, marginBottom:'1.5%' }} >Or save money with a <a href="" style={{ textDecoration:'none', color:'rgb(0,190,255)'}}>family or student plan</a></div>
                <div style={{ fontFamily:'sans-serif', fontSize:14 }} ><a href="" style={{ textDecoration:'none', color:'rgb(0,170,255)' }}>Restrictions apply. Learn more here.</a></div>
            </div>
            <div className="second_div_premium">
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center', justifyContent:'center',marginRight:'4%', flex:0.30 }}>
                    <PlayCircleOutlineOutlinedIcon style={{ color:'rgb(199,13,0)', fontSize:100 }} />
                    <div style={{ fontWeight:350, fontSize:35  }} >Ad-free & background play</div>
                    <div style={{color:'gray',marginTop:'1%' }}>Watch videos uninterrupted by ads, while using other apps, or when the screen is locked</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center', justifyContent:'center',marginRight:'4%', flex:0.25 }}>
                    <GetAppIcon style={{ color:'rgb(199,13,0)', fontSize:100, marginTop:'-10%'}}  />
                    <div  style={{ fontWeight:350, fontSize:35  }} >Downloads</div>
                    <div style={{color:'gray',marginTop:'1%' }}>Save videos for when you really need them – like when you’re on a plane or commuting.</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center',textAlign:'center', justifyContent:'center',marginRight:'4%', flex:0.25 }}>
                    <PlayCircleFilledWhiteIcon style={{ color:'rgb(199,13,0)', fontSize:100 }}  />
                    <div  style={{ fontWeight:350, fontSize:35 }} >YouTube Music Premium</div>
                    <div style={{color:'gray',marginTop:'1%' }}>Download our new music app and listen without interruptions.</div>
                </div>
            </div>
            <div className="third_div_premium">
                <div>
                    <div style={{ fontSize:40}}>Ad-free</div>
                    <div style={{ color:'gray', fontSize:20, width:'50%', fontWeight:500}}>Enjoy watching YouTube uninterrupted by ads whenever you sign in - on your mobile device, desktop, or enabled TV.</div>
                </div>
            </div>
            <div className="fourth_div_premium">
                <div style={{ paddingLeft:'45%', paddingTop:'5%' }}>
                    <div style={{ fontSize:40,display:'flex', justifyContent:'space-evenly'}}>Download and go</div>
                    <div style={{ color:'gray', fontSize:20, fontWeight:500, display:'flex', justifyContent:'flex-end', paddingLeft:'28%'}}>Now, choose from more of your favorite videos to download and watch offline.</div>
                </div>
            </div>
            <div className="fifth_div_premium">
                <div>
                    <div style={{ fontSize:40}}>Background play</div>
                    <div style={{ color:'gray', fontSize:20, width:'50%', fontWeight:500}}>With YouTube Premium, your video plays uninterrupted in the background, even when you open another app.</div>
                </div>
            </div>
            <div className="sixth_div_premium">
                <div style={{ paddingLeft:'45%', paddingTop:'5%' }}>
                    <div style={{ fontSize:40,display:'flex', justifyContent:'flex-end', paddingRight:'12%'}}>YouTube Music Premium</div>
                    <div style={{ color:'gray', fontSize:20, fontWeight:500, display:'flex', justifyContent:'flex-end', paddingLeft:'28%'}}>Easily explore the world of music ad-free, offline, and with the screen locked. Available on mobile and desktop.</div>
                </div>
            </div>
            <div className="faqs_premium">
                <div style={{ fontWeight:350, fontSize:30,marginBottom:'8%' }}>FAQ</div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                    <div onClick={ () => {
                            if(premiumPrev){
                                upPrem(<ExpandLessIcon/>);
                                finalStylePrem(finPrem);
                                premiumFin(false);
                            }
                            else{
                                upPrem(<ExpandMoreIcon />);
                                premiumFin(true);
                                finalStylePrem({display:'none'})
                            }
                        }
                    }>What is included with YouTube Premium?</div>
                    {downPrem}
                </div>
                <div style={initStylePrem}>
                    <div style={{ fontWeight:600 }}>YouTube</div>
                    <div>
                        <ul style={{ fontSize:17, fontWeight:500 }}>
                            <li>Ad-free videos: Watch millions of videos uninterrupted by ads. <a href="" style={{ textDecoration:'none', color:'rgb(0,187,255)' }}>Learn more</a></li>
                            <li>Download videos to watch offline: Save videos and playlists on mobile devices and play them offline</li>
                            <li>Play in the background: Keep videos playing when using other apps or when your screen is off <a href="" style={{ textDecoration:'none', color:'rgb(0,187,255)' }}>YouTube Music</a></li>
                            <li>Easily explore the world of music with the new and improved YouTube Music app</li>
                            <li>Ad-free music: Listen to millions of songs uninterrupted by ads</li>
                            <li>Download music to listen offline: Save music and playlists in the YouTube Music app and listen offline</li>
                            <li>Play in the background: Keep music playing when using other apps or when your screen is off <a href="" style={{ textDecoration:'none', color:'rgb(0,187,255)' }}>YouTube Kids</a></li>
                            <li>Ad-free and offline play in the YouTube Kids app</li>
                        </ul>
                        </div>
                </div>
                <div className="hrline_premium"></div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                    <div onClick={ () => {
                            if(downloadPrev){
                                upDown(<ExpandLessIcon/>);
                                finalStyleDown(fin);
                                downloadFin(false);
                            }
                            else{
                                upDown(<ExpandMoreIcon />);
                                downloadFin(true);
                                finalStyleDown({display:'none'})
                            }
                        }
                    }
                    >How does downloading videos and music work?</div>
                    {downDown}
                </div>
                <div style={initStyleDown}>
                    Download videos and music on your mobile devices to watch and listen offline for up to 30 days without being connected to the internet. For more details on how to download videos and music, please see this Help Center article.
                </div>
                <div className="hrline_premium"></div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                    <div onClick={ () => {
                            if(backGroundPrev){
                                upBack(<ExpandLessIcon/>);
                                finalStyleBack(fin);
                                backGroundFin(false);
                            }
                            else{
                                upBack(<ExpandMoreIcon />);
                                backGroundFin(true);
                                finalStyleBack({display:'none'})
                            }
                        }
                    }>What is background play?</div>
                    {downBack}
                </div>
                <div style={initStyleBack}>Background play allows videos and music
                    to keep playing in the background, even
                    when you open other apps or turn the screen 
                    off on your mobile device. For more details 
                    on background play, please see this Help Center article.
                </div>

                <div className="hrline_premium"></div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                    <div onClick={ () => {
                            if(membershipPrev){
                                upMem(<ExpandLessIcon/>);
                                finalStyleMemb(fin);
                                membershipFin(false);
                            }
                            else{
                                upMem(<ExpandMoreIcon />);
                                membershipFin(true);
                                finalStyleMemb({display:'none'})
                            }
                        }
                    } >How can I cancel my membership?</div>
                    {downMem}
                </div>
                <div style={initStyleMemb}>
                    You can cancel your membership by visiting the Paid Membership page. This will revert your account to free YouTube. You can rejoin YouTube Premium at any time.
                </div>
                <div className="hrline_premium"></div>
                <div style={{ marginTop:'18%', fontSize:18 }}>Have other questions? Visit the <a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none' }}>YouTube Help Center</a></div>
            </div>
        </div>
    )
}
