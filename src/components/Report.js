import React from 'react'
import '../Stylesheets/report.css'

export const Report = () => {
    return (
        <div className="report_container">
            <div className="report_div_one">
                <div className="report_content">
                    <div className="report_content_heading">
                        Thanks for reporting
                    </div>
                    <div className="report_content_intro" style={{ marginTop:0 }}>
                        Any member of the YouTube community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it’s not automatically taken down. Flagged content is reviewed in line with the following guidelines:
                    </div>
                    <div className="report_content_list">
                        <ul>
                            <li>Content that violates our <a href="" style={{ textDecoration:'none', color:'rgb(0,166,255)' }}>Community Guidelines</a> is removed from YouTube.</li>
                            <li style={{ marginTop:8 }}>Content that may not be appropriate for all younger audiences may be age-restricted.</li>
                        </ul>
                    </div>
                    <div className="report_content_last" style={{ marginTop:20, fontSize:14 }}>
                        <a href="" style={{ textDecoration:'none', color:'rgb(0,166,255)' }}>Learn more about reporting content on YouTube.</a>
                    </div>
                </div>
                <div className="report_div_one_image"><img className="image_report" src="https://www.youtube.com/img/flagging/land-img.png"></img></div>
            </div>
            <div className="hrline_report"></div>
            <div className="your_report">You haven't submitted any reports.</div>
        </div>
    )
}
