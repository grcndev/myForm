import { SiApplearcade } from 'react-icons/si';
import { IoLogoGameControllerA } from 'react-icons/io';
import { IoGameController } from 'react-icons/io5';
import SelectComponent from '../SelectComponent';
import { SelectProps } from '@/data/TypesOfTypes';

const SelectPlan = ({ register, setValue, errors, selectedPlan }: SelectProps) => {
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
            />
            <SelectComponent
              selectedPlan={selectedPlan}
              price={'12'}
              src={<IoLogoGameControllerA />}
              type={'Advanced'}
              setValue={setValue}
              register={register}
            />
            <SelectComponent
              selectedPlan={selectedPlan}
              price={'15'}
              src={<IoGameController />}
              type={'Pro'}
              setValue={setValue}
              register={register}
            />
          </div>
        </div>
        {errors.selectedPlan?.message && (
          <p className="mt-2 text-sm text-strawberry_red font-semibold">
            {typeof errors.selectedPlan.message === 'string' ? errors.selectedPlan.message : null}
          </p>
        )}
      </div>
    </>
  );
};

export default SelectPlan;
