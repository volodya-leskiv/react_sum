import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <p className="paragraph">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);