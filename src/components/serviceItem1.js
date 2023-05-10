import React, { useState } from "react";
import PropTypes from "prop-types";
import BioModal from "./BioModal";

const ServiceItem1 = ({ icon, title, description, bio }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100">
      <img src={icon} width={300} height={300} alt={title} />
      <div className="flex flex-col gap-4 items-center">
        <p className="font-display md:text-display-md text-display-sm font-normal">
          {title}
        </p>
        <p className="text-body-lg font-light text-neutral-700">
          {description}
        </p>
        <button
          onClick={handleClick}
          className="text-primary-600 font-light hover:text-primary-300 transition-colors duration-300"
        >
          Bio
        </button>
        {showModal && <BioModal onClose={handleClick} bio={bio} />}
      </div>
    </div>
  );
};

ServiceItem1.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bio: PropTypes.shape({
    name: PropTypes.string,
    paragraphs: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default ServiceItem1;
