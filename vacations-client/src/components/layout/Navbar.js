import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import { logoutAction } from "../../actions/userActions";

const Navbar = props => {
  const handlerLogout = () => {
    props.logout();
  };
  return (
    <nav className="nav-wrapper #a1887f brown lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo left">
          {props.siteName}{" "}
        </Link>
        <SignedInLinks handlerLogout={handlerLogout} />
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    siteName: state.siteReducers.siteName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout() {
      dispatch(logoutAction());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
