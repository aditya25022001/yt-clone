import React from 'react'
import Avatar from '@material-ui/core/Avatar';

export const ChannelInfo = ( { icon, name, email } ) => {
    return (
        <div className="main-info">
            <Avatar src={icon}/>
            <div className="name">{name}</div>
            <div className="email">{email}</div>
            <div className="manage">Manage your Google Account</div>
        </div>
    )
}
