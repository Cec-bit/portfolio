"use client";

import React, { useState } from 'react';
import "./Hover.css";

interface Option {
  title: string;
  content: string;
  imageSrc: string;
}

interface HoverProps {
  defaultTitle: string;
  defaultContent: string;
  options: Option[];
}

const Hover: React.FC<HoverProps> = ({ defaultTitle, defaultContent, options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleClick = (option: Option) => {
    if (selectedOption === option) {
      // Deselect the option if clicked again
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <section className="content">
      <div className="text-container">
        <h3>{selectedOption ? selectedOption.title : defaultTitle}</h3>
        <p>{selectedOption ? selectedOption.content : defaultContent}</p>
      </div>

      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`hover-option ${selectedOption === option ? 'active' : ''}`}
            onClick={() => handleClick(option)}
          >
            {option.title}
          </div>
        ))}
      </div>

      {selectedOption && <img src={selectedOption.imageSrc} alt={selectedOption.title} />}
    </section>
  );
};

export default Hover;
