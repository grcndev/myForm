import React from 'react'

type SelectComponent = {
    plan: string
    price: string
    src: string
    type: string
}

const SelectComponent = ({ plan, price, src, type }: SelectComponent) => {

    const backgroundColor = type === 'arcade' ? 'bg-alabaster' : type === 'advanced' ? 'bg-light_coral' : type === 'pro' ? 'bg-purplish_blue' : '';

    return (
        <div className='flex flex-col justify-between mt-3 m-2 px-2 h-40 w-36 border-2 border-light_gray focus:border-marine_bleu rounded-md cursor-pointer'>
            <div className={`flex justify-center mt-4 ml-2 ${backgroundColor}  text-white h-10 w-10 rounded-full`}>
                <svg className='ml-3 mt-3'>
                    {src}
                </svg>
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor='arcade' className='ml-2 text-marine_bleu font-semibold' >
                    {plan}
                </label>
                <span className='ml-2 text-cool_gray text-sm mb-2'>{price}</span>
            </div>
        </div>
    )
}

export default SelectComponent