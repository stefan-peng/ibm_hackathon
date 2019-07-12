import React, { Component, Container, Row, Col } from "react";
import "./Home.css";
import TopTasks from "./TopTasks"
import TopLinks from "./TopLinks"
import TopEvents from "./TopEvents"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Board</h1>
          <p>An intern planning app</p>
        </div>
      </div>
    );
  }
}