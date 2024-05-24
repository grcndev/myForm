import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-12 w-12 rounded-full mb-8  bg-light_coral">
        <svg className=" ml-4 mt-4 h-6 w-6 text-white">
          <FaCheckCircle />
        </svg>
      </div>
      <h1 className="text-xl text-marine_bleu font-semibold">Thank you!</h1>
      <span className="flex text-cool_gray text-sm px-2 w-96 items-center justify-center text-center mt-6">
        Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
        support, please feel free to email us at support@onlygaming.com.
      </span>
    </div>
  );
};

export default Feedback;
