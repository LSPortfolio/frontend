import React, { Component } from 'react';
import { pickProject } from '../Actions/project.actions';
import { connect } from 'react-redux';
import { FileShare } from '../Assets/SocialMedia/fileShare';
import { Script } from 'vm';
import CommentBox from './CommentsBox';	
import CommentList from './CommentList';


// import {FormControl, FormGroup} from 'react-bootstrap';


class ProjectDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.pickProject(this.props.match.params.id);
    }

    handleLike() {
        this.setState({ liked: !this.state.liked });
    }
    
    render() {
        const formatDate = date => {
        const months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${months[month]} ${day}, ${year}`;
        }


        return(
            <div className="boxmodel">
                {/*<h1>{Date.now().prototype.getMonth()}</h1>*/}
                <h1 style={{borderStyle: 'solid', borderTopStyle: 'hidden', borderRadius: 5, marginLeft: 40}}>{this.props.pickedProject.projectName}<span id='likebutton' onClick={ this.handleLike } style={{color: `${this.state.liked===true ? 'red' : 'white'}`, marginTop: 8, fontSize: 30, float: 'right', marginRight: 20}} className="glyphicon glyphicon-heart"></span></h1>
                <h5>{formatDate(new Date(this.props.pickedProject.created))}</h5>
                {/*<h2>{ISODate(this.props.pickedProject.created).toTimeString()}</h2>*/}

                
                    
                <img className="display-media" alt='Project Sample' src={this.props.pickedProject.media || this.props.pickedProject.cover}  style={{width: 500, height: 500}}/>
                <div style={{marginTop: '50px', display: 'flex', flexDirection:'row', borderTopStyle: 'solid', borderBottomStyle: 'solid', borderRadius: 10}}>
                    <FileShare />
                    <a target='_blank' href={this.props.pickedProject.github}><img alt='GitHub' className='logosize imagesmadeformediabuttons'src={require('../Assets/SocialMedia/githubLogo.png')}/></a>
                </div>
                <p>{this.props.pickedProject.description}</p>
                <CommentList />
      	        <CommentBox />


                
            {/* <figure className="grid-figure">
				<div>
                	<img src={this.state.image} style={{height:500, width:500}}/>
					<h1>This students project</h1>
					<h4>Contributors:{this.state.contributor}</h4>
					<p>Project description</p>
				</div>

                <FormGroup>
					<FormControl 
						className="input_form"
						placeholder="Add Comment"
					/>
                </FormGroup>
                <button>Submit</button>
            </figure> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pickedProject: state.pickedProject
    }
}

export default connect(mapStateToProps, { pickProject })(ProjectDisplay);





