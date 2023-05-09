import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <script src="https://gumroad.com/js/gumroad.js" />
    </Helmet>
    <Header />
    <div className="min-h-screen flex flex-col"> {/* Add min-h-screen and flex classes */}
      <main className="flex-grow">{children}</main> {/* Add flex-grow class */}
      <Footer />
    </div>
  </>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
