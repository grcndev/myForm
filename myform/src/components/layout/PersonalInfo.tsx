import React from 'react';

const PersonalInfo = ({ register, errors }) => {
  return (
    <>
      <h2 className="text-marine_bleu font-bold text-3xl mb-4">Personal Info</h2>
      <p className="text-cool_gray">Please provide your name, email, adress, and phone number.</p>
      <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-6">
        <div className="sm:col-span-3">
          <div className="flex items-center justify-between">
            <label htmlFor="name" className="text-marine_bleu">
              Name
            </label>
            {errors.name?.message && (
              <p className="mt-2 text-sm text-strawberry_red font-semibold">{errors.name.message}</p>
            )}
          </div>
          <input
            type="text"
            id="name"
            placeholder="name"
            autoComplete="given-name"
            className="block w-full pl-2 text-marine_bleu rounded-md border-solid border-2 border-light_gray py-1.5 "
            {...register('name')}
          />
          <div></div>
        </div>

        <div className="sm:col-span-3">
          <div className="flex items-center justify-between">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-marine_bleu">
              Email Adress
            </label>
            {errors.email?.message && (
              <p className="mt-2 text-sm text-strawberry_red font-semibold">{errors.email.message}</p>
            )}
          </div>
          <input
            type="email"
            id="email"
            placeholder="email"
            autoComplete="email"
            className="block w-full  pl-2 text-marine_bleu rounded-md border-solid border-2 border-light_gray focus:border-marine_bleu py-1.5 "
            {...register('email')}
          />
        </div>

        <div className="sm:col-span-3">
          <div className="flex items-center justify-between">
            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-marine_bleu">
              Phone Number
            </label>
            {errors.phoneNumber?.message && (
              <p className="mt-2 text-sm text-strawberry_red font-semibold">{errors.phoneNumber.message}</p>
            )}
          </div>
          <input
            type="phone"
            id="phoneNumber"
            placeholder="+1 234 567 890"
            autoComplete="phoneNumber"
            className="block w-full pl-2 text-marine_bleu rounded-md border-solid border-2 border-light_gray py-1.5"
            {...register('phoneNumber')}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
