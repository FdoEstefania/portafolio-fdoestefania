import React, { Fragment } from 'react';

function About() {
    return(
        <Fragment>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Fernando
                        <span className="text-primary">Estefania</span>
                    </h1>
                    <div className="subheading mb-5">
                        Camino de Loyola 5264 - Lo prado - R.M. - +569 82066136
                        <a href="mailto:fdo.e@hotmail.com">fdo.e@hotmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
        </Fragment>
    )    
}

export default About;