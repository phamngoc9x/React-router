import React, { Component } from 'react';
import dl from './Dulieu.json';

class Detail extends Component {

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
        <div className="container">
          {
            dl.map((value, key) => {
              if (value.id === parseInt(this.props.match.params.id)) {
                return (
                  <div className="container mt-5" key= {key}>
                    <h1>
                      {value.title}
                    </h1>
                    <div className="text-center mt-3 mb-3">
                      <img alt="title" src={value.image} />
                    </div>
                    <p>
                      {value.description}
                    </p>
                  </div>
                )
              }
            })
          }

          <h4 className="text-center mt-5 mb-4"> Tin liên quan</h4>
          <div className="row">
            <div className="col-3">
              <div className="card mb-">
                <img className="card-img-top" src="https://placehold.it/800x600" alt="Card cap" />
                <div className="card-body">
                  <h6 className="card-title"><a href="/detail">Trump: 'Tôi sẽ thất vọng nếu Triều Tiên khôi phục bãi phóng tên lửa'</a></h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card mb-">
                <img className="card-img-top" src="https://placehold.it/800x600" alt="Card cap" />
                <div className="card-body">
                  <h6 className="card-title"><a href="/detail">Trump: 'Tôi sẽ thất vọng nếu Triều Tiên khôi phục bãi phóng tên lửa'</a></h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card m">
                <img className="card-img-top" src="https://placehold.it/800x600" alt="Card cap" />
                <div className="card-body">
                  <h6 className="card-title"><a href="/detail">Trump: 'Tôi sẽ thất vọng nếu Triều Tiên khôi phục bãi phóng tên lửa'</a></h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card mb-">
                <img className="card-img-top" src="https://placehold.it/800x600" alt="Card cap" />
                <div className="card-body">
                  <h6 className="card-title"><a href="/detail">Trump: 'Tôi sẽ thất vọng nếu Triều Tiên khôi phục bãi phóng tên lửa'</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;