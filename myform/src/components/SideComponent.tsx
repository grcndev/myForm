import React from 'react'
import SectionSide from './SectionSide';

const SideComponent = ({currentStepTrue}) => {

  return (
    <div className='w-60 rounded-xl bg-purplish_blue'>
        <SectionSide currentStepTrue={currentStepTrue} step={'Step 1'} sideTitle={'Your Info'} />
        <SectionSide currentStepTrue={currentStepTrue} step={'Step 2'} sideTitle={'Select Plan'} />
        <SectionSide currentStepTrue={currentStepTrue} step={'Step 3'} sideTitle={'Add-Ons'}/>
        <SectionSide currentStepTrue={currentStepTrue} step={'Step 4'} sideTitle={'Summary'}/>
        <div>
        <div className="h-24 w-24 rounded-full bg-alabaster"></div>
        
        <div className='h-20 w-20 bg-light_blue'><div className='h-20 w-16 bg-light_coral'></div></div>
      </div>
    </div>
  )
}

export default SideComponent;

{/* <nav>
            <div className=' w-60 rounded-xl  bg-purplish_blue'>
                   {steps.map((step, index) => (
                    <div key={step.name} className='flex flex-col'> 
                         {
                        currentStep > index ? (
                            <div className='flex items-center justify-center' onClick={() => setCurrentStep(index)}>
                                <span className={`flex items-center justify-center bg-marine_bleu mr-6 rounded-full h-8 w-8`}>{step.id}</span>
                                <div className='flex flex-col'>
                                <span>Step{step.id}</span>
                                <span>{step.name}</span>
                                </div>
                            </div>
                        ) : currentStep === index ? (
                            <button onClick={() => setCurrentStep(index)}>
                                    <span>{step.id}</span>
                                    <span>{step.name}</span>
                            </button>
                        ) : (
                            <button onClick={() => setCurrentStep(index)}>
                                    <span>{step.id}</span>
                                    <span>{step.name}</span>
                            </button>
                        )
                    }
                    </div>
                   ))}
                </div>
            </nav> */}