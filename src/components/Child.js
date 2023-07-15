import React, { useState } from "react";

    const Child = ({ inputValue, onInputChange }) => {
        return (
          <div className="child">
            <h2>Child Component</h2>
            <input
              type="text"
              value={inputValue}
              onChange={onInputChange} />
    </div>
  )
}

export default Child;
