import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <h4 className="general-title text-center">About</h4>
            <div className="component-about-info">
                <div className="about-summary">
                    <p>
                        I'm a Front-End Developer for <a rel="noreferrer" href="https://www.nortonlifelock.com/us/en/" target="_blank">NortonLifeLock</a> in Bucharest, Romania.<br/>
                        I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more.
                    </p>
                    <Link to="/resume">See my resume</Link>
                </div>
                <figure className="about-image">
                    <img src={require("../../assets/images/andrei_teodorescu.jpg")} alt="Andrei teodorescu"/>
                </figure>
                <ul className="skill-summary">
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill">
                            <div className="skill-summary-tag">HTML</div>
                        </div>
                        <span className="skill-summary-percentage">90%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill">
                            <div className="skill-summary-tag">CSS</div>
                        </div>
                        <span className="skill-summary-percentage">90%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill">
                            <div className="skill-summary-tag">Javascript</div>
                        </div>
                        <span className="skill-summary-percentage">70%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill">
                            <div className="skill-summary-tag">React</div>
                        </div>
                        <span className="skill-summary-percentage">50%</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default About;