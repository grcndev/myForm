import React from 'react';

const AddOnsComponent = ({ text, title, price, setValue, selectedServices, register, watch }) => {
  const isChecked = !!selectedServices.find(serviceTitle => {
    return serviceTitle === title;
  });

  console.log(selectedServices, title, isChecked);

  const bg = isChecked ? 'bg-magnolia' : 'bg-white';

  return (
    <div className={`flex items-center justify-between ${bg} border-2 border-marine_bleu rounded-md px-2 py-1 mb-3`}>
      <input
        {...register('add_ons')}
        className="ml-2"
        type="checkbox"
        onChange={e => {
          const newSelection = e.target.checked
            ? [...selectedServices, title]
            : selectedServices.filter(serviceTitle => title !== serviceTitle);

          console.log('running', newSelection);

          setValue('add_ons', newSelection);
        }}
        value={title}
        checked={isChecked}
        id="id"
      />
      <div className="">
        <h5 className="text-marine_bleu font-bold">{title}</h5>
        <span className="text-cool_gray text-sm">{text}</span>
      </div>
      <span className="text-purplish_blue">+${parseFloat(price)}/mo</span>
    </div>
  );
};

export default AddOnsComponent;
