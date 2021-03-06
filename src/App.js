import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Content from './containers/Content/Content.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <MuiThemeProvider>
                <Layout className="Layout">
                    <Content />
                </Layout>
            </MuiThemeProvider>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
