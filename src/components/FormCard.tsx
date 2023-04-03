import React, { useEffect, useState } from 'react';
import '../styles/Card.css';

import { FormInput } from 'helpers/types';

export function FormCard(props: { formData: FormInput }): JSX.Element {
  const [userImage, setUserImage] = useState<string>();

  async function setImageAsDataUrl(): Promise<void> {
    if (props.formData.image) {
      const image = props.formData.image[0];
      if (image) {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          setUserImage(fileReader.result as string);
        };
        fileReader.readAsDataURL(props.formData.image[0]);
      }
    }
  }

  useEffect(() => {
    setImageAsDataUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        Country: <b>{props.formData.country}</b>
      </div>
      <div>
        Agree with personal data: <b>yes</b>
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
      <div style={{ display: 'flex', alignItems: 'center', height: '7rem' }}>
        <div>Image:</div>
        <div style={{ height: '100%', flexGrow: '1' }}>
          <img
            src={userImage}
            alt="user's image"
            style={{
              display: 'block',
              margin: 'auto',
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '1rem',
            }}
          />
        </div>
      </div>
    </div>
  );
}
