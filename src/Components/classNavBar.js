import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';

export default class ClassNavBar extends Component {
    render() {
        return (
            <div>
                <ButtonGroup vertical style={{borderRadius: 100}} className='sidebarcontainer sidebar' role="group">
                    <Button className='graduatesidebar'>CS1</Button>
                    <Button className='sidebar'>CS2</Button>
                    <Button className='sidebar'>CS3</Button>
                    <Button className='sidebar'>CS4</Button>
                    <Button className='sidebar'>CS5</Button>
                    <Button className='sidebar'>CS6</Button>
                    <Button className='sidebar'>CS7</Button>
                    <Button className='sidebar'>CS8</Button>
                    <Button className='sidebar'>CS9</Button>
                    <Button className='sidebar'>CS10</Button>
                </ButtonGroup>
            </div>
        );
    }
}