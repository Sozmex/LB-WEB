/* layoutblog.js */
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./headerblog";
import Footer from "./footer";

const Layoutblog = ({ children, navigate }) => (
  <>
    <Helmet>
    </Helmet>
    <Header navigate={navigate} />
    <div className="min-h-screen flex flex-col"> {/* Add min-h-screen and flex classes */}
      <main className="flex-grow">{children}</main> {/* Add flex-grow class */}
      <Footer />
    </div>
    
  </>
);

Layoutblog.propTypes = {
  children: PropTypes.node.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Layoutblog;
