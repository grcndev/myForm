import React from 'react'

const AddOnsComponent = ({text, title, price, setValue, selectedService, register}) => {
    
  const bg = text === selectedService ? 'bg-magnolia' : 'bg-white'

  console.log(
'text', selectedService
  )

    return (
      <div className={`flex items-center justify-between ${bg} border-2 border-marine_bleu rounded-md px-2 py-1 mb-3`}>
      <input 
          {...register("add_ons")}
          className="ml-2" 
          type="checkbox" 
          value={text} 
          onChange={(e) => setValue('add_ons', e.target.checked ? text : '')}
              
          // checked={text}  
          id="" 
  />
      <div className="">
      <h5 className="text-marine_bleu font-bold">{title}</h5>
      <span className="text-cool_gray text-sm">{text}</span>
      </div>
      <span className="text-purplish_blue">{price}</span>
      </div>
    );
}

export default AddOnsComponent;