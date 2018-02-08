import React, { Component } from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';


export default class ProjectDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://odis.homeaway.com/odis/listing/65d6eedc-8953-4575-8746-2a13e6d205e2.c10.jpg',
            contributor: 'Eric',
        }
        
    }
    render() {
        return(
            <div>
            <figure className="grid-figure">
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
            </figure>
            </div>
        );
    }
}