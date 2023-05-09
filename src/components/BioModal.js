import React from "react";

const BioModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-semibold"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4">{`Bio: John Doe`}</h3>
        <p className="text-lg font-light mb-4">
          John Doe is a visionary leader with extensive experience in the field of technology and law. He has spent the last two decades honing his skills and knowledge, working with various organizations to improve their processes and create innovative solutions.
        </p>
        <p className="text-lg font-light mb-4">
          As the CEO of Lawbotics, John has been instrumental in the development and growth of the company, leading a team of dedicated professionals who are passionate about creating a positive impact in the legal industry.
        </p>
        <p className="text-lg font-light mb-4">
          In his spare time, John enjoys reading, traveling, and spending time with his family. He is an avid learner and is always on the lookout for new challenges and opportunities to grow.
        </p>
      </div>
    </div>
  );
};

export default BioModal;
