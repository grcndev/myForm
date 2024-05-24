import React from 'react';

const Summary = ({ selectedServices, selectedPlan }) => {
  console.log(selectedPlan);

  return (
    <div className="flex flex-col">
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Finishing up</h2>
      <p className="text-cool_gray mb-4">Double-check everything looks OK before confirming.</p>
      <div className="bg-magnolia">
        <div className="flex items-center justify-between">
          <h4>{selectedPlan}</h4>
          <span></span>
        </div>
        <h5 className="text-marine_bleu font-bold">
          {selectedServices.map((service, id) => (
            <div key={id}>
              <h5>{service.title}</h5>
              <p>{service.price}</p>
              <p>{service}</p>
            </div>
          ))}
        </h5>
        <span className="text-light_gray text-sm"></span>
      </div>
    </div>
  );
};

export default Summary;

//{selectedServices[0]}
