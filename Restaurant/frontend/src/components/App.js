import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This is the create room page</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
