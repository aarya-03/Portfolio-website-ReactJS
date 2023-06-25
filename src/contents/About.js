import React, { Component } from 'react';

class About extends Component {
    render() {
        const { menuVisible } = this.props;
        return (
            <div className={`condiv ${menuVisible ? 'condiv-closed' : 'condiv-open'}`}>
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2 glass"></div>
                <br></br>
                <p className="p10">I love combining the worlds of logic and creative design to make eye-catching, accessible and user-friendly websites and applications. Finding creative solutions to problems is something I have always enjoyed. If you are interested in contacting me in regards to a position with your company, please visit <i>Contact Me</i> page.
                </p>
                <br></br>
                <h1 className="subtopic">Education</h1>
                <div className="hr_line line2 glass"></div>
                <br></br>
                <div className="edu">
                    <div className='box'>2019 - 2023</div>
                    <div className="content">
                        <h3>Bachelor's of Technology</h3>
                        <p>Parul University</p>
                        <p>Major: Computer Science Engineering</p>
                    </div>
                </div>
                <div className="edu">
                    <div className='box'>2018 - 2019</div>
                    <div className="content">
                        <h3>Class XII</h3>
                        <p>Sangam School of Excellence</p>
                        <p>Major: Science & Mathematics</p>
                    </div>
                </div>
                <br></br>
                { /* Certificates Section */}
                <h1 className="subtopic">Certifications</h1>
                <div className="hr_line line2 glass"></div>
                <br></br>
                <div id="certificates">
                    <p><a href=""><i class="fa-solid fa-arrow-up-right-from-square">&nbsp;</i></a>&nbsp;Data Structures in JAVA , <span>Coding Ninjas</span></p>
                    <p><a href=""><i class="fa-solid fa-arrow-up-right-from-square">&nbsp;</i></a>&nbsp;Computational Thinking for Problem Solving , <span>Coursera</span></p>
                    <p><a href=""><i class="fa-solid fa-arrow-up-right-from-square">&nbsp;</i></a>&nbsp;React JS , <span>Infosys Springboard</span></p>
                    <p><a href=""><i class="fa-solid fa-arrow-up-right-from-square">&nbsp;</i></a>&nbsp;Architecting with Google Compute Engine by Google Cloud , <span>Coursera</span></p>
                    <p><a href=""><i class="fa-solid fa-arrow-up-right-from-square">&nbsp;</i></a>&nbsp;Python for Data Science, AI & Development , <span>Coursera</span></p>
                </div>
                <br></br>
            </div>
        )
    }
}

export default About;
