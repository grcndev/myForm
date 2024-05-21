import React from "react";

const SectionSide = ({ number, step, sideTitle }) => {
  return (
    <div className="flex items-center  px-2 py-8 ml-8">
      <div className=" flex items-center justify-center mr-6 bg-pastel_blue rounded-full h-8 w-8">
        {number}
      </div>
      <div>
        <h6 className="text-xs text-cool_gray">{step}</h6>
        <h5 className="text-sm text-light_gray">{sideTitle}</h5>
      </div>
    </div>
  );
};

export default SectionSide;
