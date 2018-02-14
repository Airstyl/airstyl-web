import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Content from './containers/Content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout className="Layout">
        <Content />
      </Layout>
    );
  }
}

export default App;
