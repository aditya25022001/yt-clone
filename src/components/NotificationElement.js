import React from 'react'
import Switch from '@material-ui/core/Switch';

export const NotificationElement = ({ heading, description, checked }) => {
    return (
        <div style={{ display:'flex', flexDirection:'row' }}>
            <div><Switch color="primary" checked={checked} /></div>
            <div>
                <div style={{ marginBottom:10, fontWeight:550 }}>{heading}</div>
                <div style={{ marginBottom:10, color:'gray' }}>{description}</div>
            </div>
        </div>
    )
}
