import React from 'react'
import '../Stylesheets/settingAccount.css';
import Avatar from '@material-ui/core/Avatar';

export const SettingsAccount = ({ email, name }) => {
    return (
        <div className="account_main_div">
            <div className="account_div_one">
                <div className="div_one_content_account">
                    <div style={{ fontWeight:500, marginBottom:20 }}>Account</div>
                    <div>Choose how you appear and what you see on YouTube</div>
                    <div>Signed in as {email}</div>
                </div>
                <div className="account_search"><img src="https://lh3.googleusercontent.com/proxy/_KTx7dEap2d3mGhBe8pNzF-cFOde5FhaBtZH7Zos4yk8vuKTUakA15TXJVM1I9RBYwlq1xGlFvsc2OgcrWxoD9MU4P7hKHMVyA"></img></div>
            </div>
            <div className="hrline_account"></div>
            <div className="account_div_two">
                <div>Your YouTube channel</div>
                <div>This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</div>
                <div className="your_channel"></div>
                    <div>Your channel</div>
                    <div className="channel_info_settings">
                        <div>
                            <div><Avatar src=""/></div>
                            <div>{name}</div>
                        </div>
                        <div>Channel status and features</div>
                        <div>Create a new channel</div>
                        <div>View advanced settings</div>
                    </div>
                </div>
                <div className="hrline_account"></div>
            <div className="account_div_three">
                <div>Your account</div>
                <div>You sign in to your YouTube with your Google account</div>
                <div className="account_div_three_three">
                    <div>Google Account</div>
                    <div>
                        <div>View or change your Google Account settings</div>
                        <div>You will be redirected to your Google Account page</div>
                    </div>
                </div>
                <div className="account_div_three_four">
                    <div>Membership</div>
                    <div>
                        <div>No membership | <a href="">Get YouTube Premium</a></div>
                        <div>YouTube Premium offers uninterrupted music, ad-free videos, and more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
