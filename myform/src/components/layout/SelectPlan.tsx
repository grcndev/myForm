import { SiApplearcade } from 'react-icons/si';
import { IoLogoGameControllerA } from 'react-icons/io';
import { IoGameController } from 'react-icons/io5';
import SelectComponent from '../SelectComponent';

const SelectPlan = ({ register, setValue, errors, selectedPlan, getValues }) => {
  return (
    <>
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Select your plan</h2>
      <p className="text-cool_gray">You have the option of monthly or yearly billing.</p>

      <div className="mt-10 flex flex-col">
        <div className="flex items-center justify-center" {...register}>
          <div className="flex items-center justify-center" id="monthly">
            <SelectComponent
              selectedPlan={selectedPlan}
              price={'9'}
              src={<SiApplearcade />}
              type={'Arcade'}
              setValue={setValue}
              register={register}
              getValues={getValues}
            />
            <SelectComponent
              selectedPlan={selectedPlan}
              price={'12'}
              src={<IoLogoGameControllerA />}
              type={'Advanced'}
              setValue={setValue}
              register={register}
              getValues={getValues}
            />
            <SelectComponent
              selectedPlan={selectedPlan}
              price={'15'}
              src={<IoGameController />}
              type={'Pro'}
              setValue={setValue}
              register={register}
              getValues={getValues}
            />
          </div>
        </div>

        {errors.selectPlan?.message && <p className="mt-2 text-sm text-light_coral">{errors.selectPlan.message}</p>}
      </div>
    </>
  );
};

export default SelectPlan;

// <div className="flex items-center justify-center">
//           {toggle ? (
//             <div className="flex items-center justify-center" id="monthly">
//           <SelectComponent  price={'$9/mo'} src={<SiApplearcade/>} type={'arcade'} plan={'Arcade'}/>
//           <SelectComponent price={'$12/mo'} src={<IoLogoGameControllerA/>} type={'advanced'} plan={'Advanced'}/>
//           <SelectComponent  price={'$15/mo'} src={<IoGameController/>}  type={'pro'} plan={'Pro'}/>
//           </div>
//           ) : (
//             <div className="flex items-center justify-center" id='yearly'>
//           <SelectComponent  price={'$9/y'} src={<SiApplearcade/>} type={'arcade'} plan={'Arcade'}/>
//           <SelectComponent  price={'$12/y'} src={<IoLogoGameControllerA/>} type={'advanced'} plan={'Advanced'}/>
//           <SelectComponent {...register('proy')} price={'$15/y'} src={<IoGameController/>}  type={'pro'} plan={'Pro'}/>
//           </div>
//           )}
//         </div>
