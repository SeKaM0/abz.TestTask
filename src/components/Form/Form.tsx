/* eslint-disable no-console */
import React, {
// ChangeEvent,
// FormEvent,
// useState,
} from 'react';
import { Field, Formik } from 'formik';
import classNames from 'classnames';
import * as yup from 'yup';
import { uploadUser } from '../../api/api';

type Props = {
  positions: Position[]
  updateUsers: () => void
};

export const Form: React.FC<Props> = ({ positions, updateUsers }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('It`s required field').max(60, 'Not more than 60'),
    email: yup.string().email('Invalid email').required('It`s required field'),
    phone: yup.string().matches(/(?:\+38)?(0\d{9})+/, 'Invalid phone number').required('It`s required field').max(13, 'Invalid phone number'),
    position: yup.string().required('It`s required field'),
    photo: yup.mixed().required('File is required'),
  });

  return (
    <section className="post">
      <div className="container">
        <h1 className="post__title">Working with POST request</h1>
        <div className="post__form form">
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              position: '',
              photo: '',
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={async (values, action) => {
              const {
                name, email, phone, photo, position,
              } = values;

              const Data = new FormData();

              Data.append('position_id', `${position}`);
              Data.append('name', name);
              Data.append('email', email);
              Data.append('phone', phone);
              Data.append('photo', photo);

              await uploadUser(Data);
              updateUsers();
              action.resetForm();
            }}
          >
            {({
              setFieldValue,
              values, errors, touched, handleChange, handleBlur, handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="form__content">
                <label
                  htmlFor="name"
                  className={classNames('form__field', {
                    'form__field-error': touched.name && errors.name,
                  })}
                >
                  <input
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                  />
                  <span className={classNames('placeholder', {
                    'placeholder-error': touched.name && errors.name,
                  })}
                  >
                    Your name
                  </span>
                </label>

                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <label
                  htmlFor="email"
                  className={classNames('form__field', {
                    'form__field-error': touched.email && errors.email,
                  })}
                >
                  <input
                    type="text"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                  />
                  <span className={classNames('placeholder', {
                    'placeholder-error': touched.email && errors.email,
                  })}
                  >
                    Email
                  </span>
                </label>

                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                <label
                  htmlFor="phone"
                  className={classNames('form__field', {
                    'form__field-error': touched.phone && errors.phone,
                  })}
                >
                  <input
                    type="text"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+380..."
                  />
                  <span className={classNames('placeholder', {
                    'placeholder-error': touched.phone && errors.phone,
                  })}
                  >
                    Phone
                  </span>
                </label>

                {touched.phone && errors.phone && <p className="error">{errors.phone}</p>}

                <div className="form__position">
                  <span className="form__position-title">Select your position</span>
                  {positions.map(elem => (
                    <div key={elem.id} className="radio">
                      <Field
                        type="radio"
                        value={elem.id}
                        id={elem.name}
                        checked={+values.position === elem.id}
                        className="radio__input"
                        onChange={() => setFieldValue('position', elem.id)}
                      />
                      <label htmlFor={elem.name} className="radio__label">
                        {elem.name}
                      </label>
                    </div>
                  ))}
                </div>
                {touched.position && errors.position && <p className="error">{errors.position}</p>}
                <label className="uploadLabel" htmlFor="photo">
                  <input
                    type="file"
                    className="uploadButton"
                    id="photo"
                    name="photo"
                    onChange={(event) => {
                      if (event.target.files) {
                        setFieldValue('photo', event.target.files[0]);
                      }
                    }}
                  />
                  <span className={classNames('uploadText', {
                    'uploadText-error': touched.photo && errors.photo,
                  })}
                  >
                    Upload
                  </span>
                  <span className={classNames('uploadText2', {
                    'uploadText2-error': touched.photo && errors.photo,
                  })}
                  >
                    {values.photo ? 'Photo is uploaded' : 'Upload your photo'}
                  </span>
                </label>

                {touched.photo && errors.photo && <p className="error">{errors.photo}</p>}

                <button
                  type="submit"
                  className="button form__button"
                >
                  Sign up
                </button>
              </form>
            )}
          </Formik>

        </div>
      </div>
    </section>
  );
};
