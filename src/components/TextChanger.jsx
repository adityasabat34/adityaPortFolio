import React, { useState, useEffect } from 'react';

const TextChange = ({ dynamicTexts }) => {
  const [currentText, setCurrentText] = useState('');
  const [endValue, setEndValue] = useState(1); // Start with 1 to show the first character
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true); // To handle showing and hiding text

  useEffect(() => {
    if (dynamicTexts.length === 0) return; // Exit if there are no texts to display

    const intervalId = setInterval(() => {
      setCurrentText(dynamicTexts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1); // Increase endValue to show more text
      } else {
        setEndValue((prev) => prev - 1); // Decrease endValue to hide text
      }

      if (endValue > dynamicTexts[index].length + 10) {
        setIsForward(false);
        setShowText(false); // Start hiding text
      }

      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % dynamicTexts.length); // Cycle through dynamic texts
        setEndValue(1); // Reset to start showing the new text
        setShowText(true); // Start showing text again
      }
    }, 100); // Speed of text change (adjust if necessary)

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, dynamicTexts]);

  return (
    <div className="relative overflow-hidden">
      <span
        className={`block transition-opacity duration-1000 ease-in-out ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentText}
      </span>
    </div>
  );
};

export default TextChange;
