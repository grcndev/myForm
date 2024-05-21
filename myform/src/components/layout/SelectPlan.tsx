import React from "react";
import { SiApplearcade } from "react-icons/si"
import { IoLogoGameControllerA } from 'react-icons/io'
import { IoGameController } from "react-icons/io5"
import SelectComponent from "../SelectComponent";

const SelectPlan = ({ register }) => {
  return (
    <>
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Select your plan</h2>
      <p className="text-cool_gray">You have the option of monthly or yearly billing.</p>

      <div className='mt-10'>
        <div className="flex items-center justify-center">
          <SelectComponent {...register('arcade')} price={'$9/mo'} src={<SiApplearcade/>} type={'arcade'} plan={'Arcade'}/>
          <SelectComponent {...register('advanced')} price={'$12/mo'} src={<IoLogoGameControllerA/>} type={'advanced'} plan={'Advanced'}/>
          <SelectComponent {...register('pro')} price={'$15/mo'} src={<IoGameController/>}  type={'pro'} plan={'Pro'}/>
        </div>

        <div className="bg-magnolia">
          <input type="toggle" id='switch' />
          <label htmlFor="switch">
            <p>Monthly    Yearly</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
