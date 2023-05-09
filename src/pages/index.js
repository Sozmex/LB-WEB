import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "@reach/router";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Services from "../components/services";
import Services1 from "../components/services1";
import Awards from "../components/awards";
import About from "../components/about";
import Works from "../components/works";
import SectionBreak from "../components/SectionBreak";

const IndexPage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget;
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget.substring(1), {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollTarget = location.state?.scrollTarget;
      if (scrollTarget) {
        scroller.scrollTo(scrollTarget.substring(1), {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    }
  }, [location.state]);

  return (
    <Layout>
      <Seo />
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <SectionBreak />
      <Services />
      <SectionBreak />
      <Works />
      <SectionBreak />
      <Services1 />
      <div className="bg-neutral-100" />
    </Layout>
  );
};

export default IndexPage;
