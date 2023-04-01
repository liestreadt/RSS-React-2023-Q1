import React from 'react';
import '../styles/Card.css';

import { FormInput } from 'helpers/types';

export function FormCard(props: { formData: FormInput }): JSX.Element {
  return (
    <div className="card">
      <div>
        First Name: <b>{props.formData.firstName}</b>
      </div>
      <div>
        Surname: <b>{props.formData.lastName}</b>
      </div>
      <div>
        E-mail: <b>{props.formData.email}</b>
      </div>
      <div>
        Birthday: <b>{props.formData.birthday}</b>
      </div>
      <div>
        Country: <b>{props.formData.select}</b>
      </div>
      <div>
        User has consented to:
        {props.formData.checkbox &&
          props.formData.checkbox.map((item, index) => (
            <div key={index}>
              <b>{item}</b>
            </div>
          ))}
      </div>
      <div>
        Gender: <b>{props.formData.radio}</b>
      </div>
    </div>
  );
}
