import React, { Component } from 'react';
import '../../App.css';
import { FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import Modal from 'react-modal';

const linkedinLogo = require('../SocialMedia/linkedinLogo.png');
const facebookLogo = require('../SocialMedia/facebookLogo.com');
const twitterLogo = require('../SocialMedia/twitterLogo.png');
const emailLogo = require('../SocialMedia/emailLogo.jpg');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export class FileShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailToggleVisible: false,
            title: 'Lambda School',
            url: 'www.lambdaschool.com',
            source: 'Lambda School',
            summary: 'A testing route',
            text: '',
            emailrecipient: '',
            emailCC: '',
            emailBCC: '',
            emailSubject: '',
            emailBody: '',
            liked: false
        };
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        const joinWords = (oldDescription) => {
            let newDescription = oldDescription.split(' ').join('%20');
            return newDescription;
        }
        return (
            <div className='logoholder'>
                <Modal isOpen={this.state.emailToggleVisible}>
                    <h1>Send an Email:</h1>
                    <h6>*Separate multiple recipients/CC/BCC with a semicolon</h6>
                    <FormGroup>
                        <FormControl
                            type='text'
                            placeholder='To:'
                            onChange={(e) => this.setState({ emailrecipient: e.target.value })}
                        />
                        <FormControl
                            type='text'
                            placeholder='Subject:'
                            onChange={(e) => this.setState({ emailSubject: e.target.value })}
                        />
                        <FormControl
                            type='text'
                            placeholder='CC:'
                            onChange={(e) => this.setState({ emailCC: e.target.value })}
                        />
                        <FormControl
                            type='text'
                            placeholder='BCC:'
                            onChange={(e) => this.setState({ emailBCC: e.target.value })}
                        />
                        <textarea
                            className='form-group'
                            type='textarea'
                            rows='8'
                            style={{width:'100%'}}
                            placeholder='Email Body:'
                            onChange={(e) => this.setState({ emailBody: e.target.value })}
                        />
                    </FormGroup>
                    <div>
                        <a href={`mailto:${this.state.emailrecipient.split(' ').join()}?&cc=${this.state.emailCC.split(' ').join()}&subject=${this.state.emailSubject.split(' ').join('%20')}&bcc=${this.state.emailBCC.split(' ').join()}&body=${this.state.emailBody.split(' ').join('%20')}`}>
                            <Button>
                                <span style={{color: 'white'}} className="glyphicon glyphicon-envelope"> Send</span>
                            </Button>
                        </a>
                        <Button style={{color: 'white'}} onClick={() => this.setState({ emailToggleVisible: !this.state.emailToggleVisible })}>
                            <span style={{color: 'white'}} className="glyphicon glyphicon-trash"> Cancel</span>
                        </Button>
                    </div>
                </Modal>
                {/*LinkedIn*/}
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${joinWords(this.state.title)}&summary=${joinWords(this.state.summary)}&source=${joinWords(this.state.source)}`} target="_blank">
                    <img className='logosize imagesmadeformediabuttons' src={linkedinLogo} />
                </a>
                {/*Facebook*/}
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
                    <img className='logosize imagesmadeformediabuttons' src={facebookLogo} />
                </a>
                {/*Twitter*/}
                <a className="twitter-share-button" href={`https://twitter.com/intent/tweet?url=${window.location.href}&via=LambdaSchool&text=${joinWords(this.state.text)}&hashtags=LambdaSchool`} target="_blank">
                    <img className='logosize imagesmadeformediabuttons' src={twitterLogo} />
                </a>
                {/*Email*/}
                <a onClick={() => this.setState({ emailToggleVisible: !this.state.emailToggleVisible })}>
                    <img className='logosize imagesmadeformediabuttons' src={emailLogo}  target="_blank"/>
                </a>









                {/*
                    Like Button Component
                */}
                <span id='likebutton' onClick={ this.handleLike } style={{color: `${this.state.liked===true ? 'red' : 'white'}`, marginTop: 8, fontSize: 30}} className="glyphicon glyphicon-heart"></span>
            </div>
        );
    }
}

