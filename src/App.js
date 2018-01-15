import React, { Component } from 'react';
import style from './App.css';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className={style.title}>
        <Button size="large" type="primary">
          Primary
        </Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
      </div>
    );
  }
}

export default App;
