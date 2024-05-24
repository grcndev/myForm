import React from 'react';

const Summary = ({ selectedServices, selectedPlan, addOnsData }) => {
  // const planPrice = selectedPlan === 'Arcade' ? 10 : selectedPlan === 'Advanced' ? 12 : selectedPlan === 'Pro' ? 15 : 0;
  // vai la nos dados e procura um cara que tenha um dos valores de selectedServices
  // const mappedAddOns = addOnsData.map((el, id) => {
  //   return el.title;
  // });

  const selectedData = selectedServices.map(el => {
    // found the selected element console.log(el);

    // go into the addons array and compare the element of this loop against all of the data of addons array

    // put each of the element of addons data on the console
    // now that you have each element, compare the element that you have against the above "el"

    for (let elements of addOnsData) {
      if (elements.title === el) {
        return elements;
      }
    }
  });

  console.log(selectedData);

  return (
    <div className="flex flex-col">
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Finishing up</h2>
      <p className="text-cool_gray mb-4">Double-check everything looks OK before confirming.</p>
      <div className="bg-magnolia">
        <div className="flex items-center justify-between">
          <h4>{selectedPlan}</h4>
        </div>
        <h5 className="text-marine_bleu font-bold">
          {selectedData.map((data, id) => (
            <div key={id}>
              <h5>{data.title}</h5>
              <p>{data.price}</p>
            </div>
          ))}
        </h5>
        {}
        <span className="text-light_gray text-sm"></span>
      </div>
    </div>
  );
};

export default Summary;
