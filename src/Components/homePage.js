import React, { Component } from 'react';
import ClassNavBar from '../Components/classNavBar';
import Carousel from 'nuka-carousel';


export default class HomePage extends Component {
    
    render() {
        return (
            <div>
                <center>
                <h1>Homepage</h1>
                </center>
            <div>
            <Carousel style={{height: 400, width:400, display: 'inline-block'}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
          </Carousel>
          </div>
            </div>
        );
    }
    
}