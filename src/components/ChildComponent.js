import React from 'react';

const ChildComponent = ({ inputValue, onInputChange }) => {
  return (
    <div className="child">
      <h3>Child Component</h3>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
};

export default ChildComponent;
