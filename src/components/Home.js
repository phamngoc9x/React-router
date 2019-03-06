import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        {/* About Section */}
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
      </div>
    );
  }
}

export default Home;