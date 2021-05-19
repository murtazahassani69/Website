import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import User from './SignUp/userSignUp';

function UserSignUp() {
  return (
    <Router>
      <User />
    </Router>
  );
}

export default UserSignUp;