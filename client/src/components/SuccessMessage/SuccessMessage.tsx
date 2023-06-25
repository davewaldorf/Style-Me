import React from 'react';
import { Link } from 'react-router-dom';

interface SuccessMessageProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="text-2xl font-bold p-10 text-center">
      <p>{message}</p>
      <br />
      <Link to={buttonLink}>
        <button className="btn btn-outline btn-success">{buttonText}</button>
      </Link>
    </div>
  );
};

export default SuccessMessage;


