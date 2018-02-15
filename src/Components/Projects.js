import React, { Component } from 'react'
import Masonry from 'react-masonry-layout'
// import { Router, Route } from 'react-router';
import heart from '../Assets/heart.svg'
import chat from '../Assets/chat.svg'
import {getProjects} from '../Actions/project.actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Projects extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     perPage: 10,
  //     items: [
  //       {
  //         title: 'Project Name',
  //         image:
  //           'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/25/14/saltbae.jpg',
  //         contributors: 'Tyler Long'
  //       },
  //       {
  //         title: 'Project Name',
  //         image:
  //           'https://s7d1.scene7.com/is/image/PETCO/cat-category-090617-369w-269h-hero-cutout-d?fmt=png-alpha',
  //         contributors: 'Eric Blancas'
  //       },
  //       {
  //         title: 'Project Name',
  //         image:
  //           'http://media.guitarcenter.com/is/image/MMGS7/FA-135CE-Cutaway-Concert-Acoustic-Electric-Guitar-Natural/H70301000001000-00-500x500.jpg',
  //         contributors: 'Frank Faustino'
  //       },
  //       {
  //         title: 'Project Name',
  //         image:
  //           'https://santatracker.google.com/images/og.png',
  //         contributors: 'Roland Canuto'
  //       },
  //       {
  //         title: 'Project Name',
  //         image:
  //           'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Gaoliang_Bridge.JPG/1200px-Gaoliang_Bridge.JPG',
  //         contributors: 'Joram Clervius'
  //       },
  //       {
  //         title: 'Project Name',
  //         image:
  //           'https://upload.wikimedia.org/wikipedia/en/e/ee/Harambe_with_boy.jpg',
  //         contributors: 'Harambe'
  //       },
  //       {
  //         title: 'Project Name',
  //         image: 'http://digitalspyuk.cdnds.net/14/41/768x498/gallery_168579867.jpg',
  //         contributors: 'Joe Dirt'
  //       },
  //       {
  //         title: 'Project Name',
  //         image: 'https://images.fastcompany.net/image/upload/w_1280,f_jpg,q_auto,fl_lossy/fc/3044182-poster-p-1-ridiculous-by-design-where-designs-craziest-inventor-gets-his-ideas.gif',
  //         contributors: 'Santa'
  //       }
  //     ]
  //   }
  //   this.createGrid = this.createGrid.bind(this)
  // }

  componentDidMount() {
    this.props.getProjects();
  }

  createGrid() {
    return this.props.projects.map((project, i) => {
      return <div key={i} className="project">
        <img alt="" className="project_img" src={project.media} />
        <h4><Link to={`/project/single${project._id}`}>{project.projectName}</Link></h4>
        <div className="icons">
          {/* <img alt="like" className="project_icn" src={heart} />
          <img alt="comment" className="project_icn" src={chat} /> */}
          
        </div>
        {/* <h4>{project.contributors}</h4> */}
      </div>
    })
  }

  render() {

    return (
      <div className="projects_container">
      <Masonry sizes={masonryOptions} id="masonry-layout">{this.createGrid()}</Masonry>
      </div> 
  //     <div>
  //     <ul>
  //     {this.props.projects.map((project, i) => {
  //         return (
  //             <li key={i}>
  //                 <Link to={`/project/single${project._id}`}>{project.projectName}</Link>
  //             </li>
  //         );
  //     })}
  //     </ul>
  // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, { getProjects })(Projects);

const masonryOptions = [ { columns: 2, gutter: 20 }, { mq: '768px', columns: 3, gutter: 20 }, { mq: '1024px', columns: 4, gutter: 10 } ]