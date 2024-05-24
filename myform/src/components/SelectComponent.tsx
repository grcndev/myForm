import React from 'react';

type SelectComponent = {
  plan: string;
  price: string;
  src: string;
  type: string;
};

const SelectComponent = ({ price, src, type, setValue, selectedPlan, register }: SelectComponent) => {
  let bg = 'white';

  if (selectedPlan === type) {
    bg = 'bg-magnolia';
  }

  const backgroundColor =
    type === 'Arcade'
      ? 'bg-alabaster'
      : type === 'Advanced'
      ? 'bg-light_coral'
      : type === 'Pro'
      ? 'bg-purplish_blue'
      : '';

  console.log(type);

  return (
    <div
      {...register('selectedPlan')}
      className={`flex flex-col justify-between mt-3 m-2 px-2 h-40 w-36 border-2 ${bg} border-light_purple'  focus:border-marine_bleu rounded-md cursor-pointer`}
      onClick={() => {
        setValue('selectedPlan', type, price);
      }}
    >
      <div className={`flex justify-center mt-4 ml-2 ${backgroundColor} text-white h-10 w-10 rounded-full`}>
        <svg className="ml-3 mt-3">{src}</svg>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="arcade" className="ml-2 text-marine_bleu font-semibold">
          {type}
        </label>
        <span className="ml-2 text-cool_gray text-sm mb-2">+${price}/mo</span>
      </div>
    </div>
  );
};

export default SelectComponent;
