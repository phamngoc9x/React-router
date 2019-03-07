import React, { Component } from 'react';
import dl from './Dulieu.json';
import NewItem from './NewItem.js';
class News extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: dl
    }
  }
  render() {
    return (
      <div>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Tin tức</h2>
                <hr className="divider light my-4" />
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-5">
          <div className="row">
            {this.state.data.map( (value, key)=>{
              return (
                <NewItem key= {key} id ={value.id} title={value.title} quote={value.quote} description={value.description} image={value.image}/>
              );
            })}
          </div>
        </section>
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
      </div>
    );
  }
}

export default News;