import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
    render() {
        const { menuVisible } = this.props;
        return (
            <div className={`home condiv ${menuVisible ? 'condiv-closed' : 'condiv-open'}`}>
                <div className="welcome">
                    <h1>Hi there !<span class="wave" role="img" aria-labelledby="wave">👋</span></h1>
                    <h1>I'm <span style={{ color: "white" }}>Arya Joshi</span></h1>
                    <ReactTypingEffect className="typingeffect" text={['Computer Science Student', 'MERN Stack Developer', 'Cloud Enthusiast', 'ML Enthusiast']} speed={100} eraseDelay={700} />
                    <div class="resumeBtn glass"><a>Download Resume</a></div>
                    <Social />
                </div>
            </div>
        )
    }
}

export default Home
