import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chats: [] };
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e);
    alert();
  }
  onChat(message) {
    alert(message);
    this.setState({ chats: [...this.state.chats, message] });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Chat />
          <Bar onSubmit={this.onSubmit} />
        </header>
      </div>
    );
  }
}
class Bar extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}
class Chat extends Component {
  render() {
    return <div className="chat" />;
  }
}

class Bubble extends Component {
  render() {
    return <div className="bubble">{this.props.children}</div>;
  }
}

export default App;
