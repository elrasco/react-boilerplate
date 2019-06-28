import React, { Component } from 'react';
import './App.style.scss';

import K from '../../constants';

import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        <h1>Hello world</h1>
        <h2>-->{K.API_URL}</h2>
      </div>
    );
  }
}

export default App;
