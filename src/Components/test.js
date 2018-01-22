import React, { Component } from 'react';
import ClassNavBar from './classNavBar';
// import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Dropdown, Button } from 'bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Test extends Component {
    render () {
        return (
            <div>
                <ClassNavBar />
                <div class="btn-group dropleft">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropleft
                    </button>
                    <div class="dropdown-menu">
                        <Link to='/'>1</Link>
                        <Link to='/'>2</Link>
                        <Link to='/'>3</Link>
                        <Link to='/'>4</Link>
                        <Link to='/'>5</Link>
                    </div>
                </div>
            </div>
        );
    }
}