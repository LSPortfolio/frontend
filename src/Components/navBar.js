import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

import '../App.css';

const cs1List = [
  'Jiovan Melendez',
  'Antonio Melendez',
  'Sarah Majors',
  'Manisha Lal',
  'Evan Allen',
  'Dan Winslow',
  'Tyge Johnson',
  'Brian Durbin',
  'Jesh Yoon',
  'Latoyya Smith',
  'Jason Campbell',
  'Ely Alamillo',
  'Jake Cooley',
  'Patrick Kennedy'
];

const cs2List = [
  'Joram Clervius',
  'Eric Blancas',
  'Roland Canuto',
  'Tyler Long',
  'Matt Jackson',
  'Adam Lower',
  'Ryan Lowe',
  'Dylan Scheidt'
];

const cs3List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs4List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs5List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs6List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs7List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs8List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs9List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const cs10List = [
  'Person 1',
  'Person 2',
  'Person 3'
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(cs1List);
shuffleArray(cs2List);

export class NavBar extends Component {
  constructor() {
    super()
    this.navSwitcher = this.navSwitcher.bind(this)
  }

  navSwitcher(pathname) {
    return pathname === '/signin' || pathname === 'signup'
      ? [<Button href='/SignIn' className='navbuttons'>Sign In</Button>,
        <Button href='/SignUp' className='navbuttons'>Sign Up</Button>]
      : <Button href='/SignOut' className='navbuttons'>Sign Out</Button>
  }

  render() {
    const { pathname } = this.props.history.location;
    return (
      <div>
        <div>'/submit'
          <div style={{backgroundColor: 'dodgerBlue'}} className="container-row" id="header">
            <header style={{ width: "100%" }}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className="navigation">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <div style={{marginLeft: 5, marginRight: 10}}><img alt="logo" src={ require('../LambdaLogo.png') } /></div>
                  <div className="hidden-sm-down"><h1>Lambda Showcase</h1></div>
                </div>
                <div style={{marginRight: 5}}>
                  {this.navSwitcher(pathname)}
                  <Button href='/Submit' className='navbuttons'>Submit</Button>
                  <Button href='/Projects' className='navbuttons'>Student Projects</Button>
                  <DropdownButton pullRight id='dropdown' title="Classes">
                    <DropdownButton pullRight className='graduated' title="CS1" id='cs1'>
                    <MenuItem><Link style={{ color: 'black' }} to='/cs1'>All CS1</Link></MenuItem>
                      {
                        cs1List.map(each => <MenuItem href={'/cs1' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS2" id='cs2'>
                    <MenuItem><Link style={{ color: 'black' }} to='/cs2'>All CS2</Link></MenuItem>
                      {
                        cs2List.map(each => <MenuItem href={'/cs2' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS3" id='cs3'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs3'>All CS3</Link></MenuItem>
                      {
                        cs3List.map(each => <MenuItem href={'/cs3' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS4" id='cs4'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs4'>All CS4</Link></MenuItem>
                      {
                        cs4List.map(each => <MenuItem href={'/cs4' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS5" id='cs5'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs5'>All CS5</Link></MenuItem>
                      {
                        cs5List.map(each => <MenuItem href={'/cs5' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS6" id='cs6'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs6'>All CS6</Link></MenuItem>
                      {
                        cs6List.map(each => <MenuItem href={'/cs6' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS7" id='cs7'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs7'>All CS7</Link></MenuItem>
                      {
                        cs7List.map(each => <MenuItem href={'/cs7' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS8" id='cs8'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs8'>All CS7</Link></MenuItem>
                      {
                        cs8List.map(each => <MenuItem href={'/cs8' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                  </DropdownButton>
                  <DropdownButton pullRight title="CS9" id='cs9'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs9'>All CS7</Link></MenuItem>
                      {
                        cs9List.map(each => <MenuItem href={'/cs9' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                    <DropdownButton pullRight title="CS10" id='cs10'>
                      <MenuItem><Link style={{ color: 'black' }} to='/cs10'>All CS7</Link></MenuItem>
                      {
                        cs10List.map(each => <MenuItem href={'/cs10' + each.split(' ').join('')} key={ each.split(' ').join('') } >{ each }</MenuItem>)
                      }
                    </DropdownButton>
                </DropdownButton>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
