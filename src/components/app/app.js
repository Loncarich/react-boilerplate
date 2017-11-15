import React, { Component } from 'react';
import s from '../../styles/core.scss';

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <p className={s.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
