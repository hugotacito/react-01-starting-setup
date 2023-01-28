import React, { Component, useState } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBlock: true,
      modalIsOpen: false,
    };
  }

  state = {
    modalIsOpen: false,
  };

  showModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  toggleBlock() {
    this.setState((prevState) => ({
      showBlock: !prevState.showBlock,
    }));
  }

  duration = 300;

  defaultStyle = {
    transition: `opacity ${this.duration}ms ease-in-out`,
    opacity: 0,
  };

  transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={this.toggleBlock.bind(this)} className="Button">
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("onEnter");
          }}
          onEntering={() => {
            console.log("onEntering");
          }}
          onEntered={() => {
            console.log("onEntered");
          }}
          onExit={() => {
            console.log("onExit");
          }}
          onExiting={() => {
            console.log("onExiting");
          }}
          onExited={() => {
            console.log("onExited");
          }}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                ...this.defaultStyle,
                ...this.transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
          )}
        </Transition>

        <Backdrop show={this.state.modalIsOpen} />
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal.bind(this)}
        />
        <button className="Button" onClick={this.showModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
