import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Stylesheets/premium.css';

export const Premium = () => {
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
            <div></div>
        </div>
    )
}
