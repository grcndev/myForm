import { AddOnsProps } from '@/data/TypesOfTypes';
import React from 'react';

const AddOnsComponent = ({ data, setValue, selectedServices, register }: AddOnsProps) => {
  const isChecked = !!selectedServices.find(serviceTitle => {
    return serviceTitle === data.title;
  });

  const bg = isChecked ? 'bg-magnolia' : 'bg-white';

  return (
    <div className={`flex items-center justify-between ${bg} border-2 border-marine_bleu rounded-md py-1 px-2 mb-3`}>
      <input
        {...register('add_ons')}
        className="ml-2"
        type="checkbox"
        onChange={e => {
          const newSelection = e.target.checked
            ? [...selectedServices, data.title]
            : selectedServices.filter(serviceTitle => data.title !== serviceTitle);

          setValue('add_ons', newSelection);
        }}
        value={data.title}
        checked={isChecked}
        id="id"
      />

      <div className="flex flex-col">
        <h5 className="text-marine_bleu font-bold">{data.title}</h5>
        <span className="text-cool_gray text-sm">{data.text}</span>
      </div>

      <span className="text-purplish_blue">+${parseFloat(data.price)}/mo</span>
    </div>
  );
};

export default AddOnsComponent;
