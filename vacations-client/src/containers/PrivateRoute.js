import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, isLogged, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        if (isLogged === true) {
          return <Component {...props} {...rest} />;
        }
        return <Redirect to="/signin" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.userReducers.isLogged
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
