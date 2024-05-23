import React from "react";
import AddOnsComponent from "./AddOnsComponent";

const AddOns = ({ register, errors, setValue, selectedService}) => (
  
  <div>
    <h2 className='text-marine_bleu font-bold text-3xl mr-20 mb-4'>Pick add-ons</h2>
    <p className="text-cool_gray">Add-ons help enhance your gaming experience.</p>
    <div className="mt-10">
    <section className="mb-4 ">

      <AddOnsComponent register={register} selectedService={selectedService} title={'Online Service'} text={'Acess to multiplayer games'} price={'+$1/mo'} setValue={setValue}/>
      <AddOnsComponent register={register} selectedService={selectedService} title={'Larger Storage'} text={'Extra 1TB cloud save'} price={'+$2/mo'} setValue={setValue}/>
      <AddOnsComponent register={register} selectedService={selectedService} title={'Customizable Profile'} text={'Custom theme on your profile'} price={'+$3/mo'} setValue={setValue}/>

    </section>
      {errors.add_ons?.message && (
        <p className='mt-2 text-sm text-light_coral'>{errors.add_ons.message}</p>
      )}
    </div>
  </div>
    
);

export default AddOns;
