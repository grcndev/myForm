import React from 'react';
import { SectionSideProps } from '@/data/TypesOfTypes';

const SectionSide = ({ step, sideTitle, currentStepTrue }: SectionSideProps) => {
  const backgroundColor = step.includes(currentStepTrue)
    ? 'bg-light_blue'
    : 'border-2 border-light_gray text-light_gray';

  return (
    <div className="flex items-center px-2 py-4 ml-8">
      <div className={`flex items-center justify-center mr-6 ${backgroundColor} rounded-full h-8 w-8`}>
        {step.split(' ')[1]}
      </div>
      <div>
        <h6 className="text-xs text-cool_gray">{step}</h6>
        <h5 className="text-sm text-light_gray">{sideTitle}</h5>
      </div>
    </div>
  );
};

export default SectionSide;
