import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';
import { Route } from 'react-router'
import News from '../components/News';
import Home from '../components/Home';
import Detail from '../components/Detail';

class DieuHuongURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/tintuc/:slug.:id.html" component={Detail} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default DieuHuongURL;