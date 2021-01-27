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

export const Dropdown = () => {
    return (
        <div className="main-wrapper" id="main-wrapper">
            <div className="main-info">
                <ChannelInfo icon="https://images.indianexpress.com/2020/03/kumail-hrithik-1200.jpg" 
                              name="Aditya Uday Ubale" 
                              email="adityaubale63@gmail.com" />
            </div>
            <Elements Icon={<AccountBoxIcon />} title="Your channel"/>
            <Elements Icon={<MonetizationOnIcon/>} title="Purchases and memberships"/>
            <Elements Icon={<SettingsIcon/>} title="YouTube Studio"/>
            <Elements Icon={<SupervisorAccountIcon/>} title="Switch account" /><KeyboardArrowRightIcon/>
            <Elements Icon={<ExitToAppIcon/>} title="Sign out"/>
            <Elements Icon={<Brightness4Icon/>} title="Appearance:Dark"/><KeyboardArrowRightIcon/>
            <Elements Icon={<TranslateIcon/>} title="Language:English" /><KeyboardArrowRightIcon/>
            <Elements Icon={<LanguageIcon/>} title="Location:India"/><KeyboardArrowRightIcon/>
            <Elements Icon={<SettingsIcon/>} title="Settings"/>
            <Elements Icon={<SecurityIcon/>} title="Your data in YouTube"/>
            <Elements Icon={<HelpIcon/>} title="Help" />
            <Elements Icon={<FeedbackIcon/>} title="Send feedback"/>
            <Elements Icon={<KeyboardIcon/>} title="Keyboard shortcuts"/>
            <div className="res-mode">
                Restricted mode:Off
                <KeyboardArrowRightIcon />
            </div>
        </div>
    )
}
