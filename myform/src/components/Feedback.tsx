import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='h-25 w-25 bg-light_coral'>
      <svg className='bg-white'><FaCheckCircle/></svg>
      </div>
      <h1 className='text-xl text-marine_bleu font-semibold'>Thank you!</h1>
      <span className='text-cool_gray text-sm'>Thank you!
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.</span>
    </div>
  )
}

export default Feedback;