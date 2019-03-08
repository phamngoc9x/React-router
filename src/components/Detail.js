import React, { Component } from 'react';
import dl from './Dulieu.json';

class Detail extends Component {
  // Chuyển đổi url
  changeURL = (str) =>{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
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
          {
            dl.map((value, key) => {
              if (value.id !== parseInt(this.props.match.params.id)) {
                  if(key <= 4){
                    return (
                      <div className="col-3" key = {key}>
                        <div className="card mb-4">
                          <img className="card-img-top" src={value.image} alt={value.title}/>
                          <div className="card-body">
                            <h6 className="card-title"><a href={'/tintuc/'+ this.changeURL(value.title) +'.'+ value.id + '.html'}>{value.title}</a></h6>
                          </div>
                        </div>
                      </div>
                    )
                  }
                
              }
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;