import React from 'react'

const Summary = ({ register }) => {
  return (
    <div {...register('summary')} >
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Finishing up</h2>
      <p className="text-cool_gray mb-4">Double-check everything looks OK before confirming.</p>
      <div className='bg-magnolia'>
        <h5 className="text-marine_bleu font-bold">Online Service</h5>
        <span className="text-light_gray text-sm">Acess to multiplayer games</span>
      </div>
    </div>
  )
}

export default Summary;