import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="flex basis-1/2 flex-col group">
      <div className="overflow-hidden transition-transform duration-500 group-hover:scale-105">
        <GatsbyImage image={image} alt={title} className="transform transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="flex flex-col self-stretch pt-6 transition-transform duration-300 group-hover:-translate-y-10">
        <h3 className="font-display text-display-md pb-4">
          <Link
            to="/blog"
            className="group-hover:text-primary-600 transition duration-300"
          >
            {title}
          </Link>
        </h3>
        <p className="text-body-lg font-light text-neutral-700 group-hover:text-primary-600 transition duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
