import React, { Component, useState } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {

        const { menuVisible } = this.props;

        return (
            <>
                <nav className={`glass ${menuVisible ? 'nav-closed' : ''}`}>

                    <div className="profile">
                        <img src={profilepic} className="profilepic"></img>
                        <div>
                            <h2>Arya Joshi</h2>
                            <p>MERN Stack Developer</p>
                        </div>
                    </div>
                    <div className={`menu ${menuVisible ? 'menu-closed' : ''}`}>
                        <ul>
                            <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                            <Navitem item="About Me" tolink="/about" activec={this.activeitem}></Navitem>
                            <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                            <Navitem item="Projects" tolink="/projects" activec={this.activeitem}></Navitem>
                            <Navitem item="Contact Me" tolink="/contact" activec={this.activeitem}></Navitem>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
