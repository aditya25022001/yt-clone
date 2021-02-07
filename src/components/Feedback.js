import React from 'react'
import PhotoSizeSelectLargeIcon from '@material-ui/icons/PhotoSizeSelectLarge';
import '../Stylesheets/feedback.css'
import { Link } from 'react-router-dom';

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
                <input type="checkbox" style={{ width:18, height:18, marginRight:10 }} />Include screenshot
            </div>
            <div className="feedback_input_screenshot">
                <div className="drag_and_drop">
                    <PhotoSizeSelectLargeIcon className="feedback_icon" style={{fontSize:35}}/>
                    <div className="drag_text">Click to highlight or hide info</div>
                </div>
            </div>
            <div className="feedback_other">
                    Go to the <a href="" style={{ textDecoration:'none', color:'rgb(0,129,235)' }}>Legal Help page</a> to request content changes for legal reasons. 
                    Some <a href="" style={{ textDecoration:'none', color:'rgb(0,129,235)' }}>account and system information</a> may be sent to Google. 
                    We will use the information you give us to help address technical issues 
                    and to improve our services, subject to our <a href="" style={{ textDecoration:'none', color:'rgb(0,129,235)' }}>Privacy Policy</a> and <a href="" style={{ textDecoration:'none', color:'rgb(0,129,235)' }}>Terms of Service</a>.
            </div>
            <div className="feedback_send_cancel">
                <Link to="/" style={{ textDecoration:'none' }}>
                    <div className="feedback_cancel">CANCEL</div>
                </Link>
                <div className="feedback_send"><a href="" style={{ textDecoration:'none', color:'rgb(0,129,235)' }}>SEND</a></div>
            </div>
        </div>
    )
}
