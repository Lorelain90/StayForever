import React, { Component } from "react";
import { Container, Grid, Header, List } from "react-bootstrap";

class MyComponent extends Component {
  state = {
    peopleData: []
  };

  componentDidMount() {
      fetch('./people.json')
        .then(response => response.json())
        .then(data => this.setState({ peopleData: data }));
  }

  render() {
    
  }
}

export default MyComponent;