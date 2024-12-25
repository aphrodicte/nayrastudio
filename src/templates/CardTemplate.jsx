import React, { useState } from "react";

const Quote = ({ isChange, text, newText, onClick }) => {
  if (isChange) {
    return (
      <div
        onClick={onClick}
        className="bg-black/70 h-full w-full flex justify-center items-center backdrop-blur-sm"
      >
        <h1 className="text-white font-semibold text-center text-xl">
          {newText}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white px-4 py-2 bg-black bg-opacity-50">{text}</h1>
        <button onClick={onClick} className="px-3 py-2 bg-amber-700 font-semibold text-lg mt-5 text-white rounded-xl">
          New Quote
        </button>
      </div>
    );
  }
};

const CardTemplate = ({ text, bgImage, newText }) => {
  const [isChange, setIsChange] = useState(false);

  function handleNextQuote() {
    setIsChange(!isChange);
  }

  return (
    <div
      className="w-full aspect-square overflow-hidden rounded-lg relative flex flex-col items-center w-64 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <Quote
        text={text}
        newText={newText}
        isChange={isChange}
        onClick={handleNextQuote}
      />
    </div>
  );
};

export default CardTemplate;