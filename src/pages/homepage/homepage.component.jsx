import React from 'react';
import Header from "../../components/header/header.component";
import About from "../../components/about/about.component";
import PortfolioList from "../../components/portfolio-list/portfolio-list.component";
import ContactForm from "../../components/contact-form/contact-form.component";
import { useInView } from 'react-intersection-observer';

const HomePage = () => {

    const inViewOpt = {
        triggerOnce: true,
        rootMargin: '-150px 0px',
        onChange: (inView, entry) => {
            //console.log(inView);
            if (inView) {
                entry.target.classList.add("in-view");
            }
        }
    }

    const [aboutRef] = useInView(inViewOpt);
    const [portfolioRef] = useInView(inViewOpt);
    const [contactRef] = useInView(inViewOpt);

    return (
        <div>
            <Header/>
            <main className="main">
                <section className="component-about component-margin" id="component-about" ref={aboutRef}>
                    <About/>
                </section>
                <section className="component-portfolio component-margin" ref={portfolioRef}>
                    <PortfolioList />
                </section>
                <section className="component-contact white-cut-top white-cut-bottom component-margin" ref={contactRef}>
                    <ContactForm />
                </section>
            </main>
        </div>
    );
};


export default HomePage;