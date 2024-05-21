import React from "react";

const AddOns = ({register, errors}) => (
  
  <div>
    <h2 className='text-marine_bleu font-bold text-3xl mr-20 mb-4'>Pick add-ons</h2>
    <p className="text-cool_gray">Add-ons help enhance your gaming experience.</p>
    <div className="mt-10">
    <section className="mb-4 "{...register('add_ons')}>
      
      <div className="flex items-center justify-between border-2 border-marine_bleu rounded-md px-2 py-1 mb-3">
      <input className="ml-2" type="checkbox" name="" id=""/>
      <div className="">
      <h5 className="text-marine_bleu font-bold">Online Service</h5>
      <span className="text-cool_gray text-sm">Acess to multiplayer games</span>
      </div>
      <span className="text-purplish_blue">+$1/mo</span>
      </div>

      <div className="flex items-center justify-between border-2 border-marine_bleu rounded-md px-2 py-1 mb-3">
      <input className="ml-2" type="checkbox" name="" id=""/>
      <div className="">
      <h5 className="text-marine_bleu font-bold">Larger Storage</h5>
      <span className="text-cool_gray text-sm">Extra 1TB cloud save</span>
      </div>
      <span className="text-purplish_blue">+$2/mo</span>
      </div>

      <div className="flex items-center justify-between border-2 border-marine_bleu rounded-md px-2 py-1">
      <input className="ml-2" type="checkbox" name="" id=""/>
      <div className="">
      <h5 className="text-marine_bleu font-bold">Customizable Profile</h5>
      <span className="text-cool_gray text-sm">Custom theme on your profile</span>
      </div>
      <span className="text-purplish_blue">+$2/mo</span>
      </div>
    </section>
      {errors.add_ons?.message && (
        <p className='mt-2 text-sm text-light_coral'>{errors.add_ons.message}</p>
      )}
    </div>
  </div>
    
);

export default AddOns;
