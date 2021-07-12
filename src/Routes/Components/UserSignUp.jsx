import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import User from './SignUp/userSignUp.js';

function UserSignUp() {
  return (
    <Router>
      <User />
    </Router>
  );
}

export default UserSignUp;