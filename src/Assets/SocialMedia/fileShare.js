import React, { Component } from 'react';
import '../../App.css';

const linkedinLogo = require('../SocialMedia/linkedinLogo.png');
const facebookLogo = require('../SocialMedia/facebookLogo.com');
const twitterLogo = require('../SocialMedia/twitterLogo.png');
const instagramLogo = require('../SocialMedia/instagramLogo.png');
const emailLogo = require('../SocialMedia/emailLogo.jpg');

export class FileShare extends Component {
    render() {
        const url = 'www.lambdaschool.com';
        return (
            <div>
                <p>Share this project:</p>
                <div className='logoholder'>
                    {/*LinkedIn*/}
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=www.lambdaschool.com&title=qwerty&summary=&source=">
                        <img className='logosize' src={ linkedinLogo } />
                    </a>
                    {/*Facebook*/}
                    <a href="https://www.facebook.com/sharer/sharer.php?u=www.lambdaschool.com">
                        <img className='logosize' src={ facebookLogo } />
                    </a>
                    {/*Twitter*/}
                    <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?` + `url=${url}&` + `via=LambdaSchool&text=Hello,%20World!&hashtags=LambdaSchool`} data-size="large" hashtags="lambda">
                        <img className='logosize' src={ twitterLogo } />
                    </a>
                    {/*Email*/}
                    <a href="mailto:?">
                        <img className='logosize' src={ emailLogo } />
                    </a>
                </div>
            </div>
        );
    }
}

