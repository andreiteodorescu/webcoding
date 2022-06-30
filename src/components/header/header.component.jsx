import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        //Staging background changing animation
        const header = document.getElementById('header');
        header.addEventListener('mousemove', e => {
            let _this = e.currentTarget,
                headerOffsetWidth = _this.offsetWidth,
                pct = Math.round(e.pageX / headerOffsetWidth * 100);
            _this.style.backgroundImage = "linear-gradient(45deg,#58e7f5 0,#01cfe3 " + pct + "%,rgba(79, 59, 219, 0.8) 100%)";
        });

        // Staging hand animation
        window.addEventListener("scroll", function() {
            const windowPos = document.querySelector("html").scrollTop;
            const headerHand = document.querySelector(".dive-down");

            if (windowPos > 0) {
                headerHand.classList.add("disappear");
            }
            else {
                headerHand.classList.remove("disappear");
            }
        })
    });
    return (
        <header className="header white-cut-bottom" id="header">
            <div className="container">
                <h1 className="main-title">
                    <span itemProp="name">Hi! I am Andrei.</span>
                    I build interactive websites that run across platforms & devices
                </h1>

                <Link className="btn-primary" to="/work-bench">Resume (de mutat)</Link>
            </div>
            <button className="dive-down" aria-label="Go to next section"></button>
        </header>
    )
};

export default Header;