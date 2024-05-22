import React from 'react'
import SectionSide from './SectionSide';

const SideComponent = () => {
  return (
    <div className=' w-60 rounded-xl  bg-purplish_blue'>
        <SectionSide currentStep={1} step={'Step 1'} sideTitle={'Your Info'} />
        <SectionSide currentStep={2} step={'Step 2'} sideTitle={'Select Plan'} />
        <SectionSide currentStep={3} step={'Step 3'} sideTitle={'Add-Ons'}/>
        <SectionSide currentStep={4} step={'Step 4'} sideTitle={'Summary'}/>
        <div>
        <div className="h-24 w-24 rounded-full bg-alabaster"></div>
        
        <div className='h-20 w-20 bg-light_blue'><div className='h-20 w-16 bg-light_coral'></div></div>
      </div>
    </div>
  )
}

export default SideComponent;