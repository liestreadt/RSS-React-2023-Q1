import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Forms.css';

import { FormInput } from '../helpers/types';
import { FormCard } from '../components/FormCard';
import { ErrorMessage } from '../components/FormInputErrorMessage';

export function Forms(): JSX.Element {
  const [inputData, setInputData] = useState<FormInput[]>([]);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  function onFormSubmit(data: FormInput): void {
    setInputData([...inputData, data]);
    reset();
  }

  return (
    <div>
      <h1 className="h1">Forms</h1>
      <br />
      <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form__elem">
          <div>
            <label htmlFor="firstName">
              <div className="form__elem-name">First Name</div>
              <input
                className="form__elem-input"
                placeholder="Ivan"
                {...register('firstName', {
                  required: 'Please enter first name.',
                  pattern: {
                    value: /([A-Z]){1}([a-z]{2,})/,
                    message:
                      'First Name should start from capital letter and be greater then 2 symbols',
                  },
                })}
              />
            </label>
          </div>
          {errors.firstName && <ErrorMessage error={errors.firstName} />}
        </div>
        <div className="form__elem">
          <div>
            <label htmlFor="lastName">
              <div className="form__elem-name">Surname</div>
              <input
                className="form__elem-input"
                placeholder="Ivanov"
                {...register('lastName', {
                  required: 'Please enter surname.',
                  pattern: {
                    value: /([A-Z]){1}([a-z]{2,})/,
                    message:
                      'Last Name should start from capital letter and be greater then 2 symbols',
                  },
                })}
              />
            </label>
          </div>
          {errors.lastName && <ErrorMessage error={errors.lastName} />}
        </div>
        <div className="form__elem">
          <div>
            <label htmlFor="email">
              <div className="form__elem-name">E-mail</div>
              <input
                className="form__elem-input"
                placeholder="example@test.com"
                {...register('email', {
                  required: 'Please enter e-mail.',
                  pattern: {
                    value: /^(([\w]{1,}.[\w]{0,}){1,})@([\w]+\.)([a-z]{2,5})$/gi,
                    message: 'Invalid e-mail',
                  },
                })}
              />
            </label>
          </div>
          {errors.email && <ErrorMessage error={errors.email} />}
        </div>
        <div className="form__elem">
          <div>
            <label htmlFor="birthday">
              <div className="form__elem-name">Birthday</div>
              <input
                className="form__elem-input"
                type="date"
                {...register('birthday', { required: 'Please pick birthday date.' })}
              />
            </label>
          </div>
          {errors.birthday && <ErrorMessage error={errors.birthday} />}
        </div>
        <div className="form__elem">
          <div>
            <label
              htmlFor="select"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div className="form__elem-name">Select a country</div>
              <select className="form__elem-input" {...register('select')} defaultValue="russia">
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
            <label>
              I agree to the processing of my personal data.
              <input
                className="form__elem-input"
                value="personal-data"
                type="checkbox"
                {...register('personalData', {
                  required: 'To continue, you must agree to the processing of personal data.',
                })}
              />
            </label>
            <label>
              I agree to receive promotional notices.
              <input
                className="form__elem-input"
                value="promo"
                type="checkbox"
                {...register('checkbox')}
              />
            </label>
            <label>
              I agree to receive news announcements.
              <input
                className="form__elem-input"
                value="news"
                type="checkbox"
                {...register('checkbox')}
              />
            </label>
          </div>
          {errors.personalData && <ErrorMessage error={errors.personalData} />}
        </div>
        <div className="form__elem">
          <div>
            <div className="form__elem-name">Gender</div>
            <label>
              Male
              <input
                className="form__elem-input"
                value="male"
                type="radio"
                {...register('radio', { required: 'Please select a gender.' })}
              />
            </label>
            <label>
              Female
              <input
                className="form__elem-input"
                value="female"
                type="radio"
                {...register('radio')}
              />
            </label>
            <label>
              Other
              <input
                className="form__elem-input"
                value="Other"
                type="radio"
                {...register('radio')}
              />
            </label>
          </div>
          {errors.radio && <ErrorMessage error={errors.radio} />}
        </div>
        <div className="form__elem">
          <div>
            <label htmlFor="image">
              <div className="form__elem-name">Upload image</div>
              <input
                className="form__elem-input"
                type="file"
                accept="image/*"
                {...register('image', { required: 'Please upload an image.' })}
              />
            </label>
          </div>
          {errors.image && <ErrorMessage error={errors.image} />}
        </div>
        <input style={{ margin: '0.5rem 0', padding: '0.5rem', fontSize: '1rem' }} type="submit" />
      </form>
      <div className="main">
        {inputData.map((item, index) => (
          <FormCard key={index} formData={item} />
        ))}
      </div>
    </div>
  );
}
