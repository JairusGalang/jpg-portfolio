import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Buttons';

const CardHolder = ({ title, subtitle, image, icons, useApiImage, cardWithImage, buttonText, buttonUrl, parentFolder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSource = cardWithImage && (useApiImage ? image : `/assets/images/${parentFolder}/${image}`);

  const handleImageClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="p-4 flex-grow">
        <h2 className="font-poppins text-xl font-semibold mb-3 text-gray-800">{title}</h2>
        {cardWithImage && (
          <img
            src={imageSource}
            alt={title}
            className="w-full h-48 object-cover cursor-pointer mb-3 rounded"
            onClick={handleImageClick}
          />
        )}
        <h3 className="font-poppins text-sm text-gray-600 mb-3">{subtitle}</h3>
        {icons && (
          <div className="flex flex-wrap gap-2">
            {icons.map((icon, index) => (
              <span key={index} className="font-poppins text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {icon}
              </span>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && cardWithImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4">
            <button
              onClick={handleCloseModal}
              className="float-right text-2xl leading-none text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={imageSource}
              alt={title}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
      <div className="flex justify-center mb-4">
        <Button text={buttonText} url={buttonUrl} />
      </div>
    </div>
  );
};

CardHolder.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.node),
  useApiImage: PropTypes.bool,
  cardWithImage: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default CardHolder;