import React, { Fragment } from 'react';

function Index() {

    return(
        <Fragment>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Fernando Estefania</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/IMG_0034.jpg" alt="..." /></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#acerca">Acerca de mi</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experiencia">Experiencia</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#educacion">Educacion</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#habilidades">Habilidades</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#intereses">Intereses</a></li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Descargar C.V.</a>
                        </li>
                        {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> */}
                    </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">
                <section className="resume-section" id="acerca">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Fernando
                            <span className="text-primary">Estefania</span>
                        </h1>
                        <div className="subheading mb-5">
                            <span>Camino de Loyola 5264 - Lo prado - R.M. - </span> 
                            <a href='tel:+569 82066136'>+569 82066136</a> -     
                            <a href="mailto:fdo.e@hotmail.com">fdo.e@hotmail.com</a>
                        </div>
                        <div className="subheading mb-5">
                        <h3 className="mb-0" >Programador | Desarrollador de software</h3>

                        </div>
                        <p className="lead mb-5">
                        Soy <b>Fernando Moises Estefania Olcese</b>  graduado como analista programador, realice mis estudios en el centro de formación técnica Santo Tomas, 
                        obteniendo mi titulo profesional, me apasiona el desarrollo de software y las nuevas tecnologías.
                        He trabajado en el aprovechamiento de metodología ágiles para obtener el mejor resultado posible de un proyecto.
                        </p>
                        <div className="social-icons">
                            <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
                <section className="resume-section" id="experiencia">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experiencia</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer PHP</h3>
                            <div className="subheading mb-3">GSBPO. Externalización de procesos</div>
                            <p>
                                Desarrollo, mantención y soporte en importantes plataformas web, con inteligencia de negocios 
                                desarrolladas en PHP y/o framework, SQL, Jquery. Automatización entorno web y aplicaciones 
                                de escritorio con procesos SQL. R.P.A. Uipath. Planificación de requerimientos con U.M.L. 
                            </p>
                            <ul>
                                <li>https://portalclaro.gsbpo.cl</li>
                                <li>https://appdigitaliza.gsbpo.cl</li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">abril 2019 - Presente</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Soporte TI nivel 2</h3>
                            <div className="subheading mb-3">Independiente-mente part-time</div>
                            <p>
                                Soporte de equipos e impresoras de red, instalación y mantención de Sistemas operativos
                                windows, soporte remoto.
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Octubre-2018 - febrero-2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer Junior</h3>
                            <div className="subheading mb-3">Textil las Américas</div>
                            <p>
                                Mantención y desarrollo web PHP, base de datos MySQL, e-commerce, SEO, actualización de 
                                productos de sitios web.
                            </p>
                            <ul>
                                <li>http://www.textillasamericas.cl</li>
                                <li>http://www.opplechile.cl</li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">July 2010 - December 2011</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Practica profesional</h3>
                            <div className="subheading mb-3">SVG production</div>
                            <p>
                                Desarrollo Web en lenguaje de programación web PHP, servicios Rest, base de datos MySQL, framework bootstrap, JavaScript, jquery, Html5
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="educacion">
                <div className="resume-section-content">
                    <h2 className="mb-5">Educacion</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">I.P. Santo tomas</h3>
                            <div className="subheading mb-3">Analista programador</div>
                            <div>Ciencias de la informacion - Desarrollador web</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015 - 2018</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">“CISCO</h3>
                            <div className="subheading mb-3">Hardware y conectividad de equipos personales.</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="habilidades">
                <div className="resume-section-content">
                    <h2 className="mb-5">Habilidades</h2>
                    <div className="subheading mb-3">Lenguages de programacion & Herramientas de desarrollo</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item"><i className="fab fa-less"></i></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                        <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                        <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Diseño Responsivo web
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Pruebas y depuración entre navegadores
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Equipos multifuncionales
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Desarrollo Ágil y Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="intereses">
                <div class="resume-section-content">
                    <h2 class="mb-5">Intereses</h2>
                    <p>Aparte de ser un desarrollador web, disfruto parte de mi tiempo al aire libre.</p>
                    <p class="mb-0">Paso gran parte de mi tiempo libre explorando los últimos avances tecnológicos en el mundo del desarrollo web .</p>
                </div>
            </section>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">C.V.</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <object data="docs/FernandoEstefania.pdf" type="application/pdf" width="750" height="500"></object>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>

            </div>
        </Fragment>
    )    
}

export default Index;