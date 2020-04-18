import React, { Component } from "react";
import { UserList } from "./components/UserList";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/profile" component={UserList} />
            <Route path="/report" component={UserList} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
