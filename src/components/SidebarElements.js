import React from 'react'
import '../Stylesheets/sidebar.css';

export const SidebarElements = ( {Icon, title} ) => {
    var id = "icon"+title;
    return (
        <div className="elements">
            <div className="icon" id={id}>
                {Icon}
            </div>
            <div className="label">
                {title}
            </div>
        </div>
    )
}
