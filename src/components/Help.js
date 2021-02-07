import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FeedbackIcon from '@material-ui/icons/Feedback';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SearchIcon from '@material-ui/icons/Search';
import '../Stylesheets/help.css'

export const Help = () => {
    return (
        <div className="help_container">
            <div className="help_heading">
                <div className="help_header">
                    <div>Help</div>
                    <div><CloseIcon /></div>
                </div>
                <div className="help_input">
                    <div className="lens_help"><SearchIcon style={{ fontSize:25,color:'black'}} /></div>
                    <input className="input_help" autoFocus="true" type="text" placeholder="Search help"/>
                </div>
            </div>
            <div className="hello">
            <div className="help_reference" >
                <div className="help_ref_heading">Popular help resources</div>
                <div className="help_count">
                    <div><AssignmentOutlinedIcon style={{ color:'rgb(0,123,255)', marginRight:33 }} /></div>
                    <div className="help_content">Contact the YouTube creator Support team</div>
                </div>
                <div className="help_count">
                    <div><AssignmentOutlinedIcon style={{ color:'rgb(0,123,255)', marginRight:33 }} /></div>
                    <div className="help_content">Verify your YouTube account</div>
                </div>
                <div className="help_count">
                    <div><AssignmentOutlinedIcon style={{ color:'rgb(0,123,255)', marginRight:33 }} /></div>
                    <div className="help_content">Delete or hide your YouTube channel</div>
                </div>
                <div className="help_count">
                    <div><AssignmentOutlinedIcon style={{ color:'rgb(0,123,255)', marginRight:33 }} /></div>
                    <div className="help_content">Subscribers counts</div>
                </div>
                <div id="help_count_five">
                    <div><AssignmentOutlinedIcon style={{ color:'rgb(0,123,255)', marginRight:33 }} /></div>
                    <div className="help_content_five">Manage channel settings</div>
                </div>
                <div className="all_articles">
                    <div className="help_ref_all">BROWSE ALL ARTICLES</div>
                    <OpenInNewIcon style={{ fontSize:15, marginLeft:10, color:'rgb(0,155,207)', opacity:0.8 }} />
                </div>
                <div className="help_forum">
                    <div className="help_ref_forum">VISIT HELP FORUM</div>
                    <OpenInNewIcon style={{ fontSize:15, marginLeft:10, color:'rgb(0,155,207)', opacity:0.8 }} />
                </div>
            </div>
            <div className="hrline_help"></div>
            <div className="help_last_part">
                <div className="contact_us">Contact us</div>
                <div className="help_send_feedback">
                    <div><FeedbackIcon style={{ color:'rgb(0,103,199)', marginRight:30 }} /></div>
                    <div>Send feedback</div>
                </div>
            </div>
            </div>
        </div>
    )
}
