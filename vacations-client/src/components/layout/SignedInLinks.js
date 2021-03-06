import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      {/* TODO: change the vacation to accept generic userID */}
      <li>
        <NavLink to="/vacations/1">Vacations user 1</NavLink>
      </li>
      <li>
        <NavLink to="/signin" onClick={props.handlerLogout}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating #4dd0e1 cyan lighten-2">
          HG
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
