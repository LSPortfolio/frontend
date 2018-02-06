import React, { Component } from 'react';
import '../../App.css';

const linkedinLogo = require('../SocialMedia/linkedinLogo.png');
const facebookLogo = require('../SocialMedia/facebookLogo.png');
const twitterLogo = require('../SocialMedia/twitterLogo.png');
const instagramLogo = require('../SocialMedia/instagramLogo.png');

export class FileShare extends Component {
    render() {
        const url = 'www.lambdaschool.com';
        return (
            <div className='logoholder'>
                {/*<script>
                    window.fbAsyncInit = function() {
                        FB.init({
                            appId            : '215649868984809',
                            autoLogAppEvents : true,
                            xfbml            : true,
                            version          : 'v2.12'
                        });
                    };
                    (function(d, s, id){
                        let js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {return;}
                        js = d.createElement(s); js.id = id;
                        js.src = "https://connect.facebook.net/en_US/sdk.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                </script>
                */}
                <img className='logosize' src={ linkedinLogo } />
                <img className='logosize' src={ facebookLogo } />
                {/*
                    Twitter: 
                */}
                <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?` + `url=${url}&` + `via=LambdaSchool&text=Hello,%20World!&hashtags=LambdaSchool`} data-size="large" hashtags="lambda">
                    <img className='logosize' src={ twitterLogo } />
                </a>
            </div>
        );
    }
}

