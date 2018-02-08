import React, { Component } from 'react';
import '../../App.css';
import Modal from 'react-modal';
import FacebookModal from '../SocialMedia/modals/facebookModal';
import { FormGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';



const linkedinLogo = require('../SocialMedia/linkedinLogo.png');
const facebookLogo = require('../SocialMedia/facebookLogo.com');
const twitterLogo = require('../SocialMedia/twitterLogo.png');
const emailLogo = require('../SocialMedia/emailLogo.jpg');

export class FileShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedinToggleVisible: false,
            facebookToggleVisible: false,
            twitterToggleVisible: false,
            emailToggleVisible: false,
            title: ''

        };
    }

    render() {
        const url = 'www.lambdaschool.com';
        return (
            <div className='logoholder'>
                
                <Modal className='modalstyles' isOpen={this.state.linkedinToggleVisible}>
                    <h2>Share on LinkedIn:</h2>
                    <div style={{ marginTop: 30 }}>
                        <FormGroup>
                            <FormControl
                                type='text'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={(e) => this.setState({ title: e.target.value })}
                            />
                            <FormControl
                                type='text'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={(e) => this.setState({ title: e.target.value })}
                            />
                        </FormGroup>

                        <div className='mediabuttons'>
                            <Button className='mediasharebuttonlinkedin'>Share</Button>
                            <Button onClick={()=>this.setState({linkedinToggleVisible: !this.state.linkedinToggleVisible})} className='mediaclosebutton'>Close</Button>
                        </div>
                    </div>
                    
                </Modal>

                <Modal className='modalstyles' isOpen={this.state.facebookToggleVisible}>
                    <h2>Share on Facebook:</h2>
                    <div className='mediabuttons'>
                        <Button className='mediasharebuttonfacebook'>Share</Button>
                        <Button onClick={()=>this.setState({facebookToggleVisible: !this.state.facebookToggleVisible})} className='mediaclosebutton'>Close</Button>
                    </div>
                </Modal>

                <Modal className='modalstyles' isOpen={this.state.twitterToggleVisible}>
                    <h2>Share on Twitter:</h2>
                    <div className='mediabuttons'>
                        <Button className='mediasharebuttontwitter'>Share</Button>
                        <Button onClick={()=>this.setState({twitterToggleVisible: !this.state.twitterToggleVisible})} className='mediaclosebutton'>Close</Button>
                    </div>
                </Modal>

                <Modal className='modalstyles' isOpen={this.state.emailToggleVisible}>
                    <h2>Share by email:</h2>
                    <div className='mediabuttons'>
                        <Button className='mediasharebuttonemail'>Share</Button>
                        <Button onClick={()=>this.setState({emailToggleVisible: !this.state.emailToggleVisible})} className='mediaclosebutton'>Close</Button>
                    </div>
                </Modal>

                <img onClick={()=>this.setState({linkedinToggleVisible: !this.state.linkedinToggleVisible})} className='logosize imagesmadeformediabuttons' src={require('../SocialMedia/linkedinLogo.png')} />
                <img onClick={()=>this.setState({facebookToggleVisible: !this.state.facebookToggleVisible})} className='logosize imagesmadeformediabuttons' src={require('../SocialMedia/facebookLogo.com')} />
                <img onClick={()=>this.setState({twitterToggleVisible: !this.state.twitterToggleVisible})} className='logosize imagesmadeformediabuttons' src={require('../SocialMedia/twitterLogo.png')} />
                <img onClick={()=>this.setState({emailToggleVisible: !this.state.emailToggleVisible})} className='logosize imagesmadeformediabuttons' src={require('../SocialMedia/emailLogo.jpg')} />











                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=www.lambdaschool.com&title=qwerty&summary=&source=">
                    linkedin
                </a>
                {/*Facebook*/}
                <a href="https://www.facebook.com/sharer/sharer.php?u=www.lambdaschool.com">
                    facebook
                </a>
                {/*Twitter*/}
                <a class="twitter-share-button" href={`https://twitter.com/intent/tweet?` + `url=${url}&` + `via=LambdaSchool&text=Hello,%20World!&hashtags=LambdaSchool`} data-size="large" hashtags="lambda">
                    twitter
                </a>
                {/*Email*/}
                <a href="mailto:?">
                    email
                </a>

            </div>
        );
    }
}

