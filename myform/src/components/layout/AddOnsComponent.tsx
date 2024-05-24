import React from 'react';

const AddOnsComponent = ({ text, title, price, setValue, selectedServices, register }) => {
  const options = selectedServices ? selectedServices : [];

  console.log(selectedServices);
  const isChecked = options.find(service => {
    console.log('found', service, service.title, title, service.title === title);
    return service.title === title;
  });

  console.log('is checked', isChecked);

  const bg = isChecked ? 'bg-magnolia' : 'bg-white';

  return (
    <div className={`flex items-center justify-between ${bg} border-2 border-marine_bleu rounded-md px-2 py-1 mb-3`}>
      <input
        {...register('add_ons')}
        className="ml-2"
        type="checkbox"
        value={title}
        onChange={e => {
          const newSelection = e.target.checked
            ? [...options, { title, price }]
            : options.filter(service => service.title !== title);

          setValue('add_ons', newSelection);
        }}
        checked={isChecked}
        id=""
      />
      <div className="">
        <h5 className="text-marine_bleu font-bold">{title}</h5>
        <span className="text-cool_gray text-sm">{text}</span>
      </div>
      <span className="text-purplish_blue">+${price}/mo</span>
    </div>
  );
};

export default AddOnsComponent;
