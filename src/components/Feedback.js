import React from 'react'
import PhotoSizeSelectLargeIcon from '@material-ui/icons/PhotoSizeSelectLarge';
import '../Stylesheets/feedback.css'

export const Feedback = () => {
    return (
        <div className="feedback_container">
            <div className="feedback_heading">Send feedback</div>
            <textarea className="feedback_input"
                autoFocus="true"
                type="text" 
                placeholder="Have feedback? We'd love to hear it, but please dont share sensitive information. Have questions? Try help or support."
            />
            <div className="feedback_screenshot">
                <input type="checkbox" checked="true" style={{ width:18, height:18, marginRight:10 }} />Include screenshot
            </div>
            <div className="feedback_input_screenshot">
                <div className="drag_and_drop">
                    <PhotoSizeSelectLargeIcon className="icon" style={{fontSize:35}}/>
                    <div className="drag_text">Click to highlight or hide info</div>
                </div>
            </div>
            <div className="feedback_other">
                    Go to the <a>Legal Help page</a> to request content changes for legal reasons. 
                    Some <a>account and system information</a> may be sent to Google. 
                    We will use the information you give us to help address technical issues 
                    and to improve our services, subject to our <a>Privacy Policy</a> and <a>Terms of Service</a>.
            </div>
            <div className="feedback_send_cancel">
                <div className="feedback_cancel">CANCEL</div>
                <div className="feedback_send"><a>SEND</a></div>
            </div>
        </div>
    )
}
