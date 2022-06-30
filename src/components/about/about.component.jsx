import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h4 className="general-title text-center">About</h4>
            <div className="component-about-info">
                <p className="about-summary">
                    I'm a Front-End Developer for <a rel="noreferrer" href="https://www.nortonlifelock.com/us/en/" target="_blank">NortonLifeLock</a> in Bucharest, Romania.<br/>
                    I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more.
                </p>
                <figure className="about-image">
                    <div className="about-image-shape">
                        <img src={require("../../assets/images/andrei_teodorescu.jpg")} alt="Andrei teodorescu"/>
                    </div>
                </figure>
                <ul className="skill-summary">
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill" style={{width: '90%'}}>
                            <div className="skill-summary-tag">HTML</div>
                        </div>
                        <span className="skill-summary-percentage">90%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill" style={{width: '90%'}}>
                            <div className="skill-summary-tag">CSS</div>
                        </div>
                        <span className="skill-summary-percentage">90%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill" style={{width: '70%'}}>
                            <div className="skill-summary-tag">Javascript</div>
                        </div>
                        <span className="skill-summary-percentage">70%</span>
                    </li>
                    <li className="skill-summary-item">
                        <div className="skill-summary-fill" style={{width: '50%'}}>
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