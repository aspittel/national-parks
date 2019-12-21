import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import Home from "./Home";
import Park from "./Park";

const npsListUrl =
  "https://developer.nps.gov/api/v1/parks?fields=addresses,images&api_key=";

// The API key is stored as an environmental variable in an .env vile
const apiKey = process.env.REACT_APP_NPS_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = { parks: [], loading: true };
  }

  componentDidMount() {
    fetch(`${npsListUrl}${apiKey}`)
      .then(res => res.json())
      .then(parks => this.setState({ parks: parks.data, loading: false }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {/* Shows a loader until the API call finishes */}
        <MoonLoader color="red" loading={this.state.loading} />
        <Route
          path="/"
          render={props => <Home {...props} parks={this.state.parks} />}
          exact
        />
        <Route
          path="/park/:name"
          render={props => <Park {...props} parks={this.state.parks} />}
        />
      </>
    );
  }
}

export default App;
