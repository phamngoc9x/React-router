import React, { Component } from 'react';
import Nav from './Nav';

class News extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
            </div>
                    <div className="project-name">
                      Project Name
            </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
            </div>
                    <div className="project-name">
                      Project Name
            </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/3.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
            </div>
                    <div className="project-name">
                      Project Name
            </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt="" />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
            </div>
                    <div className="project-name">
                      Project Name
            </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
          </div>
        </section>
        {/* Contact Section */}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fas fa-phone fa-3x mb-3 text-muted" />
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                {/* Make sure to change the email address in anchor text AND the link below! */}
                <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-light py-5">
          <div className="container">
            <div className="small text-center text-muted">Copyright © 2019 - Start Bootstrap</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default News;