import React from 'react'
import { Elements } from './Elements';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import SecurityIcon from '@material-ui/icons/Security';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { ChannelInfo } from './ChannelInfo';
import { Link } from 'react-router-dom';
import '../App.css';

export const Dropdown = () => {
    return (
        <div className="main-wrapper" id="main-wrapper" style={{ right:0 }}>
            <div className="main-info" style={{ color:'white', display:'flex', marginBottom:'2%' }}>
                <ChannelInfo icon="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg" 
                              name="Aditya Uday Ubale" 
                              email="adityaubale63@gmail.com" />
            </div>
            <Elements Icon={<AccountBoxIcon />} title="Your channel"/>
            <Elements Icon={<MonetizationOnIcon/>} title="Purchases and memberships"/>
            <Elements Icon={<SettingsIcon/>} title="YouTube Studio"/>
            <div className="dropdown_hover" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4%' }}>
                <Elements Icon={<SupervisorAccountIcon/>} title="Switch account" />
                <KeyboardArrowRightIcon style={{ color:'white', fontSize:18}}/>
            </div>
            <Elements Icon={<ExitToAppIcon/>} title="Sign out"/>
            <div className="dropdown_hover" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4%' }}>
                <Elements Icon={<Brightness4Icon/>} title="Appearance:Dark"/>
                <KeyboardArrowRightIcon style={{ color:'white', fontSize:18}}/>
            </div>
            <div className="dropdown_hover" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4%' }}>
                <Elements Icon={<TranslateIcon/>} title="Language:English" />
                <KeyboardArrowRightIcon style={{ color:'white', fontSize:18}}/>
            </div>
            <div className="dropdown_hover" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4%' }}>
                <Elements Icon={<LanguageIcon/>} title="Location:India"/>
                <KeyboardArrowRightIcon style={{ color:'white', fontSize:18}}/>
            </div>
            <Link to="/settings" style={{ textDecoration:'none' }}> 
                <Elements Icon={<SettingsIcon/>} title="Settings"/>
            </Link>
            <Elements Icon={<SecurityIcon/>} title="Your data in YouTube"/>
            <Link to="/help" style={{ textDecoration:'none' }}>
                <Elements Icon={<HelpIcon/>} title="Help" />
            </Link>
            <Link to="/feedback" style={{ textDecoration:'none' }}>
                <Elements Icon={<FeedbackIcon/>} title="Send feedback"/>
            </Link>
            <Elements Icon={<KeyboardIcon/>} title="Keyboard shortcuts"/>
            <div style={{ height:0.5, backgroundColor:'rgb(77,77,77)', marginTop:'2%', marginBottom:'2%' }}></div>
            <div className="res-mode" style={{ color:'white',marginBottom:'2%', paddingLeft:'8%', display:'flex', alignItems:'center', flexDirection:'row' }}>
                <div style={{ marginTop:'4%', marginBottom:'4%' }}>Restricted mode:Off</div>
                <KeyboardArrowRightIcon style={{ color:'white', fontSize:18, marginLeft:'5%' }} />
            </div>
        </div>
    )
}
