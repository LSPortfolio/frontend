import React, { Component } from 'react';
import ClassNavBar from './classNavBar';
import Carousel from 'nuka-carousel';
import '../App.css';



export default class Test extends Component {
    render () {
        return (
         <div className="wheel" style={{ width: 900}}>
            <Carousel style={{height: 500, width:700, display: 'inline-block'}}>
            <img src="https://lambdaschool.com/assets/img/istock1blue.jpg" style={{ width: 700, height: 500}}/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
          </Carousel>
          </div>
        );
    }
}