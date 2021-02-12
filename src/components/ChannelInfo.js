import React from 'react'
import Avatar from '@material-ui/core/Avatar';

export const ChannelInfo = ( { icon, name, email } ) => {
    return (
        <div className="main-info">
            <div style={{ display:'flex', flexDirection:'row', width:'100%',paddingTop:'2%', paddingLeft:'8.5%' }}>
                <Avatar src={icon}/>
                <div style={{ marginLeft:'5%', width:'100%' }}>
                    <div className="name" style={{ fontWeight:500, fontSize:15 }}>{name}</div>
                    <div className="email" style={{ fontSize:14, fontWeight:500 }}>{email}</div>
                    <div className="manage" style={{ color:'rgb(0,187,255)', fontWeight:400, fontSize:14, marginTop:'5%', width:'100%' }}>Manage your Google Account</div>
                </div>
            </div>
        </div>
    )
}
