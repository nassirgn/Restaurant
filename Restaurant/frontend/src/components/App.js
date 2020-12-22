import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as constant from "../constants";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                {constant.HOME}
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {constant.FEATURES}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {constant.PRICING}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {constant.ABOUT}
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {constant.DROPDOWN_TEXT}
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  {constant.ACTION}
                </a>
                <a class="dropdown-item" href="#">
                  {constant.ANOTHER_SECTION}
                </a>
                <a class="dropdown-item" href="#">
                  {constant.SOMETHING_ELSE_HERE}
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  {constant.SEPARATED_LINK}
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              {constant.SEARCH_TEXT}
            </button>
          </form>
        </div>
      </nav>
      
      <div class="jumbotron">
  <h1 class="display-3">{constant.HELLO_WORLD}</h1>
  <p class="lead">{constant.JUMBOTRON_TEXT_BODY1}</p>
  <hr class="my-4" />
  <p>{constant.JUMBOTRON_TEXT_BODY2}</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">{constant.LEARN_MORE}</a>
  </p>
</div>
</React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
