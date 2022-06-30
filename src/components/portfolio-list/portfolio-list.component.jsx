import React from 'react';
import PORTFOLIO_DATA from "../../portfolio-data.json";
import {InView} from "react-intersection-observer";

const PortfolioList = () => {

    return (
        <div className="container">
            <h4 className="general-title text-center">Clients</h4>
            {PORTFOLIO_DATA.map(({id, name, tags, year}) => (
                <InView className="component-portfolio-item" as="div" triggerOnce="true" rootMargin="-50px 0px" onChange={(inView, entry) => {
                    if (inView) {
                        entry.target.classList.add("in-view");
                    }
                }} key={'projkey-' + id}>
                    <div className="component-portfolio-inner">
                        <h4 className="component-portfolio-inner-title">
                            {name}
                        </h4>
                        <ul className="list-unstyled project-tech">
                            {tags.map(({id, tag_name}) => {
                                return <li key={'tagkey-' + id }>{tag_name}</li>;
                            })}
                        </ul>
                        <span className="project-year">
                        {year}
                    </span>
                    </div>
                </InView>
            ))}
        </div>
    )
};

export default PortfolioList;