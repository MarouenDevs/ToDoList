import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.js";
import ToDoList from "../containers/ToDoList";

const Routes = props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <ToDoList />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
