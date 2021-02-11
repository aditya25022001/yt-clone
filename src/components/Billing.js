import React from 'react'
import { Link } from 'react-router-dom';
import '../Stylesheets/billing.css';

export const Billing = () => {
    return (
        <div className="main_div_biling">
            <div style={{ display:'flex', flexDirection:'row', width:'90%', justifyContent:'space-between' }}>
                <div>
                    <div style={{ fontWeight:550, fontSize:18, marginBottom:'8%' }}>Billing and payments</div>
                    <div style={{ fontWeight:500, fontSize:25, marginBottom:'3%' }}>Choose how to make purchases on YouTube</div>
                </div>
                <div className="settings_icon_billing">
                    <Link to="/settings" style={{ textDecoration:'none', color:'white' }}>
                        SETTINGS
                    </Link>
                </div>
            </div>
            <div className="hrline_billing"></div>
            <div style={{ display:'flex', flexDirection:'row', alignItems:'center', width:'90%', justifyContent:'space-between' }}>
                <div>
                    <div style={{ fontWeight:550 , fontSize:15, marginBottom:'2%'}}>Quick purchase is disabled</div>
                    <div style={{ color:'gray', fontSize:15, marginBottom:'2%' }}>You will be asked to verify your account for all YouTube purchases</div>
                    <div style={{ fontSize:15 }}><a href="" style={{ color:'rgb(0,187,255)', textDecoration:'none' }}>Learn more about purchase verification</a></div>
                </div>
                <div className="enable_biling">ENABLE QUICK PURCHASE</div>
            </div>
        </div>
    )
}
