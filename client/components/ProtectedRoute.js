import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../queries/apollloQueries";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";

const ProtectedRoute = () => {
  const { data, loading } = useQuery(FETCH_USER);
  return (
    <Switch>
      {!loading && data?.user ? (
        <Route exact path="/dashboard">
          <App children={<Dashboard />}></App>
        </Route>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default ProtectedRoute;
