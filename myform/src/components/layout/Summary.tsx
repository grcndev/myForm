import React from 'react';

const Summary = ({ selectedServices, selectedPlan, addOnsData }) => {
  const planPrice = selectedPlan === 'Arcade' ? 10 : selectedPlan === 'Advanced' ? 12 : selectedPlan === 'Pro' ? 15 : 0;

  const selectedData = selectedServices.map(el => {
    for (let elements of addOnsData) {
      if (elements.title === el) {
        return elements;
      }
    }
  });

  const totalPrice = selectedData.reduce((total, current) => {
    return total + current.price;
  }, planPrice);

  return (
    <div className="flex flex-col">
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Finishing up</h2>
      <p className="text-cool_gray mb-4">Double-check everything looks OK before confirming.</p>
      <div className="bg-magnolia text-marine_bleu font-semibold px-3 py-3 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h4 className="">{selectedPlan}</h4>
          <span>${planPrice}</span>
        </div>
        <div className="bg-light_gray w-30 h-[0.5px] mb-4"></div>
        <div className="">
          {selectedData.map((data, id) => (
            <div key={id} className="flex items-center justify-between py-1">
              <h5 className="text-cool_gray font-normal">{data.title}</h5>
              <p className="text-marine_bleu font-normal">+${data.price}</p>
            </div>
          ))}
        </div>
        {}
      </div>
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-cool_gray mt-4">Total</h5>
        <span className="text-purplish_blue text-md font-bold">+${totalPrice}</span>
      </div>
    </div>
  );
};

export default Summary;
