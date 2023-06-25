import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { menuVisible } = this.props;
        return (
            <div className={`condiv ${menuVisible ? 'condiv-closed' : 'condiv-open'}`}>
                <h1 className="subtopic">Get in touch !</h1>
                <div className="hr_line line2 glass"></div>
                <br></br>
                <div id="contact">
                    <p>Let's make something awesome together.</p>
                    <lottie-player src="https://lottie.host/68f5cf0f-f57e-4990-b77a-77ebfab403bb/F7LEyv5K6H.json" background="transparent" speed="0.3" id="player" autoplay></lottie-player>
                    <div className='row glass'>
                        <div className="btnbox">
                            <a href="mailto:yourmail@gmail.com" className='btnsame gmailBtn'><i class="fa-regular fa-envelope"></i></a>
                            <span className='caption'>Gmail</span>
                        </div>
                        <div className="btnbox">
                            <a href="" className='btnsame btn3'><i class="fa fa-linkedin"></i></a>
                            <span className='caption'>LinkedIn</span>
                        </div>
                        <div className="btnbox">
                            <a href="" class="btnsame btn4"><i class="fa fa-instagram"></i></a>
                            <span className='caption'>Instagram</span>
                        </div>
                        <div className="btnbox">
                            <a href="" className="btnsame btn5"><i class="fa-brands fa-facebook"></i></a>
                            <span className='caption'>Facebook</span>
                        </div>
                        <div className="btnbox">
                            <a href="" class="btnsame btn2"><i class="fa fa-twitter"></i></a>
                            <span className='caption'>Twitter</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
