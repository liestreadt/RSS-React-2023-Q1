import React, { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import '../styles/Forms.css';

import { FormInput } from '../helpers/types';
import { FormCard } from '../components/FormCard';
import { ErrorMessage } from '../components/FormInputErrorMessage';
import { CheckboxInput } from '../components/CheckboxInput';
import { Input } from '../components/Input';

export function Forms(): JSX.Element {
  const [inputData, setInputData] = useState<FormInput[]>([]);
  const [submitMessageVisibility, setSubmitMessageVisibility] = useState<boolean>(false);

  const methods = useForm<FormInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = methods;

  function onFormSubmit(data: FormInput): void {
    setInputData(structuredClone([...inputData, data]));
    setSubmitMessageVisibility(true);

    setTimeout(() => {
      reset();
      setSubmitMessageVisibility(false);
    }, 2000);
  }

  return (
    <>
      {submitMessageVisibility ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            fontSize: '3rem',
          }}
        >
          Data has been saved.
        </div>
      ) : (
        <div>
          <h1 className="h1">Forms</h1>
          <FormProvider {...methods}>
            <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="form__elem">
                <Input
                  labelText="First Name"
                  testId="firstNameInputId"
                  type="text"
                  placeholder="Ivan"
                  name="firstName"
                  requiredText="Please enter first name."
                  pattern={/^([A-Z]){1}([a-z]{2,})$/}
                  patternMessage="First Name should start from capital letter and be greater then 2 symbols"
                />
                {errors.firstName && <ErrorMessage error={errors.firstName} />}
              </div>
              <div className="form__elem">
                <Input
                  labelText="SurName"
                  testId="surnameInputId"
                  type="text"
                  placeholder="Ivanov"
                  name="lastName"
                  requiredText="Please enter surname."
                  pattern={/^([A-Z]){1}([a-z]{2,})$/}
                  patternMessage="Last Name should start from capital letter and be greater then 2 symbols"
                />
                {errors.lastName && <ErrorMessage error={errors.lastName} />}
              </div>
              <div className="form__elem">
                <Input
                  labelText="E-mail"
                  testId="emailInputId"
                  type="email"
                  placeholder="example@test.com"
                  name="email"
                  requiredText="Please enter e-mail."
                  pattern={/^(([\w]{1,}.[\w]{0,}){1,})@([\w]+\.)([a-z]{2,5})$/gi}
                  patternMessage="Invalid e-mail"
                />
                {errors.email && <ErrorMessage error={errors.email} />}
              </div>
              <div className="form__elem">
                <Input
                  labelText="Birthday"
                  type="date"
                  name="birthday"
                  requiredText="Please pick birthday date."
                />
                {errors.birthday && <ErrorMessage error={errors.birthday} />}
              </div>
              <div className="form__elem">
                <div>
                  <label
                    htmlFor="select"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <div className="form__elem-name">Select a country</div>
                    <select
                      className="form__elem-input"
                      {...register('country')}
                      defaultValue="russia"
                    >
                      <option value="Russia">Russia</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="Poland">Poland</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="form__elem">
                <div className="form__checkbox">
                  <CheckboxInput
                    labelText="I agree to the processing of my personal data."
                    value="personalData"
                    type="checkbox"
                    name="personalData"
                    requiredText="To continue, you must agree to the processing of personal data."
                  />
                  <CheckboxInput
                    labelText="I agree to receive promotional notices."
                    value="promo"
                    type="checkbox"
                    name="checkbox"
                  />
                  <CheckboxInput
                    labelText="I agree to receive news announcements."
                    value="news"
                    type="checkbox"
                    name="checkbox"
                  />
                </div>
                {errors.personalData && <ErrorMessage error={errors.personalData} />}
              </div>
              <div className="form__elem">
                <div>
                  <div className="form__elem-name">Gender</div>
                  <CheckboxInput
                    labelText="Male"
                    value="male"
                    type="radio"
                    name="radio"
                    requiredText="Please select a gender."
                  />
                  <CheckboxInput
                    labelText="Female"
                    value="female"
                    type="radio"
                    name="radio"
                    requiredText="Please select a gender."
                  />
                  <CheckboxInput
                    labelText="Other"
                    value="other"
                    type="radio"
                    name="radio"
                    requiredText="Please select a gender."
                  />
                </div>
                {errors.radio && <ErrorMessage error={errors.radio} />}
              </div>
              <div className="form__elem">
                <Input
                  labelText="Upload image"
                  type="file"
                  name="image"
                  requiredText="Please upload an image."
                />
                {errors.image && <ErrorMessage error={errors.image} />}
              </div>
              <input
                style={{ margin: '0.5rem 0', padding: '0.5rem', fontSize: '1rem' }}
                type="submit"
              />
            </form>
          </FormProvider>
          <div className="main">
            {inputData.map((item, index) => (
              <FormCard key={index} formData={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
