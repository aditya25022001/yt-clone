import React from 'react'
import Switch from '@material-ui/core/Switch';
import '../Stylesheets/privacy.css';

export const Privacy = () => {
    return (
        <div className="main_privacy">
            <div className="privacy_one">
                <div>Privacy</div>
                <div>Manage what you share on YouTube</div>
                <div>Choose who can see your saved playlists and subscriptions</div>
                <div>Review <a>YouTube Terms of Service</a> and <a>Google Privacy Policy</a></div>
            </div>
            <div className="hrline_privacy"></div>
            <div className="privacy_two">
                <div>
                    <div>Playlists and subscriptions</div>
                    <div>
                        <div>
                            <Switch />
                            <div>
                                <div>Keep all my saved playlists private</div>
                                <div>Playlists created by others won’t appear on your channel. Playlists created by you have separate, individual privacy settings. <a>Learn more</a></div>
                            </div>
                        </div>
                        <div>
                            <Switch />
                            <div>
                                <div>Keep all my subscriptions private</div>
                                <div>Your subscriptions will not be visible to others. Manage your subscriptions <a>here</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Ads on YouTube</div>
                    <div>You may see ads on YouTube based on general factors, like the topic of a video. The ads you see may also depend on your <a>Google Ads Settings</a>. To learn more about how ads work for family accounts with kids, visit the <a>Google for Families Help Center</a>.</div>
                </div>
            </div>
        </div>
    )
}
