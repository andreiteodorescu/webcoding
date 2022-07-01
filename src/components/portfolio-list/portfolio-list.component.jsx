import React from 'react';
import PORTFOLIO_DATA from "../../portfolio-data.json";
import {InView} from "react-intersection-observer";

const PortfolioList = () => {

    return (
        <div className="container">
            <h4 className="general-title text-center">Clients</h4>
            <ul className="component-portfolio-list">
                {PORTFOLIO_DATA.map(({id, name, tags, year}) => (
                    <InView className="component-portfolio-item" as="li" triggerOnce="true" rootMargin="-50px 0px" onChange={(inView, entry) => {
                        if (inView) {
                            entry.target.classList.add("in-view");
                        }
                    }} key={'projkey-' + id}>
                        <div className="component-portfolio-inner">
                            <h3 className="component-portfolio-inner-title">
                                {name}
                            </h3>
                            <ul className="component-portfolio-inner-tech">
                                {tags.map(({id, tag_name}) => {
                                    return <li key={'tagkey-' + id }>{tag_name}</li>;
                                })}
                            </ul>
                            <span className="component-portfolio-inner-year">
                                {year}
                            </span>
                        </div>
                        <div className="component-portfolio-animated-bg" aria-hidden="true"></div>
                    </InView>
                ))}
            </ul>
        </div>
    )
};

export default PortfolioList;