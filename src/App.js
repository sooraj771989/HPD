import React, { Component } from "react";
import { UserList } from "./components/UserList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Report from "./components/Report";
import Home from "./components/Home";
import "./assets/css/App.scss";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/profile" component={UserList} />
            <Route path="/report" component={Report} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
