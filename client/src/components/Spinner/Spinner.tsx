import React from 'react';
import { PropagateLoader } from 'react-spinners';

function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <PropagateLoader color="#000000" />
  </div>
  );
}

export default Spinner;