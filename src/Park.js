import React, { Component } from "react";

class Park extends Component {
  constructor() {
    super();
    this.state = {
      park: {}
    };
  }

  componentDidMount() {
    // using Object destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { match, parks } = this.props;
    const park = parks.find(park => park.name === match.params.name);

    this.setState({ park });
  }

  render() {
    const { park } = this.state;
    return park ? <h1>{park.name}</h1> : <></>;
  }
}

export default Park;
