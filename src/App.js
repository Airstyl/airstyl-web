import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Content from './containers/Content/Content';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Desktop from "./components/Responsive/Desktop";
import Mobile from "./components/Responsive/Mobile";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <Desktop>
              <Layout className="Layout">
                <Content />
              </Layout>
            </Desktop>
            <Mobile>
                <Layout className="Layout">
                    <Content />
                </Layout>
            </Mobile>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
