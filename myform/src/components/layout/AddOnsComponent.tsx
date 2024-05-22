import React from 'react'

const AddOnsComponent = ({text, title, price, setValue}) => {
    
    return (
      <div className="flex items-center justify-between border-2 border-marine_bleu rounded-md px-2 py-1 mb-3">
      <input className="ml-2" type="checkbox" name="" id="" onClick={() => setValue('add_ons', price)}/>
      <div className="">
      <h5 className="text-marine_bleu font-bold">{title}</h5>
      <span className="text-cool_gray text-sm">{text}</span>
      </div>
      <span className="text-purplish_blue">{price}</span>
      </div>
    );
}

export default AddOnsComponent;