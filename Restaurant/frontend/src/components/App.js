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
            <a class="btn btn-primary btn-lg" href="#" role="button">
              {constant.LEARN_MORE}
            </a>
          </p>
        </div>

        <form>
          <fieldset>
            <legend>Legend</legend>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly=""
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="email@example.com"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleSelect1">Example select</label>
              <select class="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleSelect2">Example multiple select</label>
              <select multiple="" class="form-control" id="exampleSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Example textarea</label>
              <textarea class="form-control" id="exampleTextarea" rows="3" />
            </div>
            <div class="form-group">
              <label for="exampleInputFile">File input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
              <small id="fileHelp" class="form-text text-muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </small>
            </div>
            <fieldset class="form-group">
              <legend>Radio buttons</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                    checked=""
                  />
                  Option one is this and that—be sure to include why it's great
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  />
                  Option two can be something else and selecting it will
                  deselect option one
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios3"
                    value="option3"
                    disabled=""
                  />
                  Option three is disabled
                </label>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <legend>Checkboxes</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    checked=""
                  />
                  Option one is this and that—be sure to include why it's great
                </label>
              </div>
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    disabled=""
                  />
                  Option two is disabled
                </label>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <legend>Sliders</legend>
              <label for="customRange1">Example range</label>
              <input type="range" class="custom-range" id="customRange1" />
            </fieldset>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
