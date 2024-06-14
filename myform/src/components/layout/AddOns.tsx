import React from 'react';
import AddOnsComponent from './AddOnsComponent';

const AddOns = ({ register, errors, setValue, selectedServices, addOnsData }) => (
  <div>
    <h2 className="text-marine_bleu font-bold text-3xl mr-20 mb-4">Pick add-ons</h2>
    <p className="text-cool_gray">Add-ons help enhance your gaming experience.</p>
    <div className="mt-10">
      <section className="mb-4 ">
        {addOnsData.map(data => (
          <AddOnsComponent register={register} selectedServices={selectedServices} data={data} setValue={setValue} />
        ))}
      </section>
      {errors.add_ons?.message && (
        <p className="mt-2 text-sm font-semibold text-strawberry_red">{errors.add_ons.message}</p>
      )}
    </div>
  </div>
);

export default AddOns;
