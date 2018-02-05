import React, { Component } from 'react';
import '../../App.css';

const linkedinLogo = require('../SocialMedia/linkedinLogo.png');
const facebookLogo = require('../SocialMedia/facebookLogo.png');
const twitterLogo = require('../SocialMedia/twitterLogo.png');
const instagramLogo = require('../SocialMedia/instagramLogo.png');

export class FileShare extends Component {
    render() {
        return (
            <div className='logoholder'>
                <img className='logosize' src={ linkedinLogo } />
                <img className='logosize' src={ facebookLogo } />
                <a class="twitter-share-button" href="https://twitter.com/intent/tweet?via=LambdaSchool&text=Hello,%20World!&hashtags=LambdaSchool" data-size="large" hashtags="lambda">
                    <img className='logosize' src={ twitterLogo } />
                </a>
            </div>
        );
    }
}

