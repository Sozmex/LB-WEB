import React from "react";
import { Link } from "gatsby";

const Layout1 = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout1;