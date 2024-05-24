import React from 'react';
import SectionSide from './SectionSide';

const SideComponent = ({ currentStepTrue }) => {
  return (
    <div className="w-60 h-[500px] rounded-xl bg-cover bg-capa">
      <SectionSide currentStepTrue={currentStepTrue} step={'Step 1'} sideTitle={'Your Info'} />
      <SectionSide currentStepTrue={currentStepTrue} step={'Step 2'} sideTitle={'Select Plan'} />
      <SectionSide currentStepTrue={currentStepTrue} step={'Step 3'} sideTitle={'Add-Ons'} />
      <SectionSide currentStepTrue={currentStepTrue} step={'Step 4'} sideTitle={'Summary'} />
    </div>
  );
};

export default SideComponent;
