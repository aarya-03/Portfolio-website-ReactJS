import React, { Component } from 'react';

import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        const { menuVisible } = this.props;
        return (
            <div className={`condiv ${menuVisible ? 'condiv-closed' : 'condiv-open'}`}>
                <h1 className="subtopic">Projects</h1>
                <div className="hr_line line2 glass"></div>
                <br></br>
                <div class="port_out port1 glass"><a href="https://github.com/aarya-03/Citizen-Journalism-with-Fake-news-Reporting-system"><img src={project1} className="po1"></img></a>
                    <p>Citizen journalism</p></div>
                <div class="port_out port2 glass"><a href='https://github.com/aarya-03/Gadget-zone'><img src={project2} className="po1"></img></a>
                    <p>Gadget zone: An e-commerce website</p></div>
                <div class="port_out port3 glass"><a href="https://github.com/aarya-03/To-do-App"><img src={project3} className="po1"></img></a>
                    <p>To-do App</p></div>
                <div class="port_out port4 glass"><a href="https://github.com/aarya-03/Portfolio-website-ReactJS"><img src={project4} className="po1"></img></a>
                    <p>Portfolio website</p></div>
            </div>
        )
    }
}

export default Portfolio
