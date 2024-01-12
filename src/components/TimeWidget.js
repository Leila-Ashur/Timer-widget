// TimeWidget.js
import React, { useState } from 'react';
import './TimeWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const TimeWidget = () => {
  // State for hours, minutes, and AM/PM
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [isAM, setIsAM] = useState(true);

  // Functions to handle increment and decrement
  const handleIncrement = (type) => {
    if (type === 'hours') {
      setHours((prevHours) => (prevHours === 12 ? 1 : prevHours + 1));
    } else {
      setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
    }
  };

  const handleDecrement = (type) => {
    if (type === 'hours') {
      setHours((prevHours) => (prevHours === 1 ? 12 : prevHours - 1));
    } else {
      setMinutes((prevMinutes) => (prevMinutes === 0 ? 59 : prevMinutes - 1));
    }
  };

  // Function to toggle AM/PM
  const toggleAMPM = () => {
    setIsAM((prevIsAM) => !prevIsAM);
  };

  // Function to handle submit
  const handleSubmit = () => {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${isAM ? 'AM' : 'PM'}`;
    alert(formattedTime);
  };

  
  return (
    <div className="card-container">
      <div className="card">
        {/* Display and controls for hours */}
        <div className="controls">
          <div className="dropdown">
            <FontAwesomeIcon icon={faChevronUp} size="sm" onClick={() => handleIncrement('hours')} />
            <span>{String(hours).padStart(2, '0')}</span>
            <FontAwesomeIcon icon={faChevronDown} size="sm" onClick={() => handleDecrement('hours')} />
          </div>

          <span className="separator">:</span>

          {/* Display and controls for minutes */}
          <div className="dropdown">
            <FontAwesomeIcon icon={faChevronUp} size="sm" onClick={() => handleIncrement('minutes')} />
            <span>{String(minutes).padStart(2, '0')}</span>
            <FontAwesomeIcon icon={faChevronDown} size="sm" onClick={() => handleDecrement('minutes')} />
          </div>

          {/* AM/PM selector */}
          <div className="am-pm">
            <span onClick={toggleAMPM}>{isAM ? 'AM' : 'PM'}</span>
          </div>
        </div>

        {/* Submit button */}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TimeWidget