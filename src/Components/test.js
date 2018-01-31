import React, { Component } from 'react';
import '../App.css'
export default class Test extends Component {

    render () {
        return (
            <div style={{ display:'flex', flexDirection:'row' }}>
                <div><img onClick={() => alert("STUFF")} className='medialogos' src={require('../Components/SocialMedia/facebookLogo.png')} /></div>
                <div><img onClick={() => alert("STUFF")} className='medialogos' src={require('../Components/SocialMedia/instagramLogo.png')} /></div>
                <div><img onClick={() => alert("STUFF")} className='medialogos' src={require('../Components/SocialMedia/linkedinLogo.png')} /></div>
                <div><img onClick={() => alert("STUFF")} className='medialogos' src={require('../Components/SocialMedia/twitterLogo.png')} /></div>
            </div>
        );
    }
}