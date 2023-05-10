import React from 'react';

const BioModal = ({ onClose, bio }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-semibold"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4">{`Bio: ${bio.name}`}</h3>
        {bio.paragraphs.map((paragraph, index) => (
          <p className="text-lg font-light mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BioModal;
