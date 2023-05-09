import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import header from "./header";
import Footer from "./footer";
import Header from "./header";

const Layoutblog = ({ children }) => (
  <>
    <Helmet>
      <script src="https://gumroad.com/js/gumroad.js" />
    </Helmet>
    <Header/>
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Layoutblog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layoutblog;
