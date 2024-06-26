'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormDataSchema } from './FormDataSchema';
import PersonalInfo from './layout/PersonalInfo';
import SelectPlan from './layout/SelectPlan';
import AddOns from './layout/AddOns';
import SideComponent from './SideComponent';
import Summary from './layout/Summary';
import Feedback from './Feedback';
import { addOnsData, steps } from '../data/items';
import { Inputs, FieldName } from '@/data/TypesOfTypes';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStepTrue, setCurrentStepTrue] = useState(1);

  const {
    setValue,
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      selectedPlan: '',
      add_ons: [],
    },
  });

  const selectedPlan = watch('selectedPlan');
  const selectedServices = watch('add_ons');

  console.log(selectedServices, errors);

  const processForm: SubmitHandler<Inputs> = data => {
    console.log('foi!', data);
    reset();
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 5) {
        await handleSubmit(processForm)();
      }
      setCurrentStep(step => step + 1);
      setCurrentStepTrue(step => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
      setCurrentStepTrue(step => step - 1);
    }
  };

  const x = setValue;

  return (
    <section className="flex items-center justify-between m-48 p-6 rounded-xl bg-white">
      <SideComponent currentStepTrue={currentStepTrue} />

      <div className="flex flex-col">
        <form className="mx-20 mt-8" onSubmit={handleSubmit(processForm)} noValidate>
          {currentStep === 0 && <PersonalInfo register={register} errors={errors} />}
          {currentStep === 1 && (
            <SelectPlan register={register} errors={errors} setValue={x} selectedPlan={selectedPlan} />
          )}
          {currentStep === 2 && (
            <AddOns
              register={register}
              errors={errors}
              setValue={setValue}
              selectedServices={selectedServices}
              addOnsData={addOnsData}
            />
          )}
          {currentStep === 3 && (
            <Summary selectedServices={selectedServices} selectedPlan={selectedPlan} addOnsData={addOnsData} />
          )}
          {currentStep === 4 && <Feedback />}
        </form>

        <div className="mt-8 mx-20 pt-5">
          <div className="flex justify-between">
            {currentStep === 0 || currentStep === 4 ? (
              <button></button>
            ) : (
              <button
                type="button"
                onClick={prev}
                className=" bg-white px-2 py-1 text-sm font-semibold text-marine_bleu cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              >
                Go Back
              </button>
            )}
            {currentStep === 3 ? (
              <button
                type="submit"
                onClick={next}
                className="rounded-md bg-marine_bleu text-white px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit
              </button>
            ) : currentStep === 4 ? (
              <button></button>
            ) : (
              <button
                type="button"
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className="rounded-md bg-marine_bleu text-white px-6 py-3 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
