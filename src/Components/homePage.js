import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

export default class HomePage extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <img alt="" src="https://lambdaschool.com/assets/img/istock1blue.jpg"/>
                <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
            </Carousel>
        );
    }
}