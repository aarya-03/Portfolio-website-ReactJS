import React, { Component } from 'react'
import SkillCard from '../components/SkillCard';

class Skills extends Component {
  render() {
    const { menuVisible } = this.props;
    return (
      <div className={`condiv ${menuVisible ? 'condiv-closed' : 'condiv-open'}`}>
        <h1 className="subtopic">Skills</h1>
        <div className="hr_line line2 glass"></div>
        <br></br>
        <div className="skills">
          <SkillCard skill="React JS" icon={<i className="fab fa-react"></i>}></SkillCard>
          <SkillCard skill="Java" icon={<i className="fa-brands fa-java"></i>}></SkillCard>
          <SkillCard skill="Javascript" icon={<i className="fa-brands fa-square-js"></i>}></SkillCard>
          <SkillCard skill="Google Cloud" icon={<i className="fa-solid fa-cloud"></i>}></SkillCard>
          <SkillCard skill="MongoDB" icon={<i className="fa-solid fa-database"></i>}></SkillCard>
          <SkillCard skill="MySql" icon={<i className="fa-solid fa-database"></i>}></SkillCard>
          <SkillCard skill="Bootstrap" icon={<i className="fab fa-bootstrap"></i>}></SkillCard>
          <SkillCard skill="Node.js" icon={<i className="fab fa-node"></i>}></SkillCard>
        </div>
        <br></br>
        {/* WhyToWork Section */}
        <h1 className="subtopic">Why work with me?</h1>
        <div className="hr_line line2 glass"></div>
        <br></br>
        <div id="why-to-work">
          <ul>
            <li><i className="fas fa-check">&nbsp;</i>Analytical</li>
            <li><i className="fas fa-check">&nbsp;</i>Deadline Conscious</li>
            <li><i className="fas fa-check">&nbsp;</i>Detail Oriented</li>
          </ul>
          <ul>
            <li><i className="fas fa-check">&nbsp;</i>Collaborative</li>
            <li><i className="fas fa-check">&nbsp;</i>Quick Learner</li>
            <li><i className="fas fa-check">&nbsp;</i>Time Management</li>
          </ul>
        </div>
      </div >
    )
  }
}

export default Skills; 
