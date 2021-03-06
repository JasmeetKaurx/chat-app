import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useProfile } from "../context/profilecontext";
import { Loader } from "rsuite";

function PublicRoute({ children, ...routeProp }) {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return <Loader center vertical size="md" speed="slow" content="Loading" />;
  }

  if (profile && !isLoading) {
    return <Redirect to="/"></Redirect>;
  }
  return <Route path={routeProp}> {children} </Route>;
}

export default PublicRoute;
