import React from 'react';
import AppleLogo from '../images/Apple_logo.svg';
import FacebookLogo from '../images/Facebook_logo.svg';
import GoogleLogo from '../images/google-logo.svg';
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import AppleLogoBlack from '../images/Apple_logo_black.svg';
import FacebookLogoBlack from '../images/Facebook_logo_blue.svg';
import GoogleBlack from '../images/Google_logo_color.svg';

export const Step33 = (formikProps) => {
  const { email, givenName, gender, weightUnit, currentWeight, age, currentHeightIn, currentHeightFt, currentHeight, measureSystem, loggedIn, logginEmail } = formikProps.values;
  return (
<div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
    <div className="tutorial-quiz__section tutorial-quiz__section--top tutorial-quiz__section--radius">
      <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize tutorial-quiz__title--md">
        Your custom course has been activated and starts today!
      </div>
      <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize">
        <span>Now create your Noom account.</span> <br /> Input the information
        below to begin your Noom journey.
      </div>
      <div className={"tutorial-login " + ((loggedIn) ? 'tutorial-login__hidden' : '')}>
        <div className="tutorial-payment__title">Create an account</div>
        <div className="tutorial-login__button apple">
          <a href="#">
            <img
                src={AppleLogo}
                alt=""
              />
            Sign in with apple
          </a>
        </div>
        <div className="tutorial-login__devider">
          <span>or continue with</span>
        </div>
        <div className="tutorial-login__button facebook">
          <a href="#">
          <img
                src={FacebookLogo}
                alt=""
              />
            Facebook
          </a>
        </div>
        <div className="tutorial-login__button google">
          <a href="#">
          <img
                src={GoogleLogo}
                alt=""
              />
            Google
          </a>
        </div>
      </div>
      <div className={"tutorial-login " + (!(loggedIn) ? 'tutorial-login__hidden' : '')}>
        <div className="tutorial-payment__title">
            Account <a href="/step-37.html">Change</a>
        </div>
        <div className="tutorial-login__info">
            <img src={FacebookLogoBlack} alt="" />
            <span>{logginEmail}</span>
        </div>
    </div>
      <div className="tutorial-form">
        <div>
          <div className="tutorial-account">
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Email</div>
              <div className="tutorial-input tutorial-input--md">
                <Field
                    name="email"
                    as={TextField}
                    placeholder={JSON.stringify(email).replace(/['"]+/g, '')}
                    type="email"
                    value={JSON.stringify(email).replace(/['"]+/g, '')}
                />                
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Password</div>
              <div className="tutorial-input tutorial-input--md">
                <input type="password" name="password" />
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Confirm password</div>
              <div className="tutorial-input tutorial-input--md">
                <input type="password" name="confirm-password" />
              </div>
            </div>
          </div>
          <div className="tutorial-profile">
            <div className="tutorial-payment__title">Create your profile</div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Name</div>
              <div className="tutorial-input tutorial-input--md">
                <Field
                    name="givenName"
                    as={TextField}
                    placeholder={JSON.stringify(givenName).replace(/['"]+/g, '')}
                    type="text"
                    value={JSON.stringify(givenName).replace(/['"]+/g, '')}
                /> 
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Gender</div>
              <div className="tutorial-switch">
                <Field
                  name="gender"
                  value={gender}
                  render={({ field }) => (
                  <>
                      <label className="radio-item tutorial-switch__item">
                      <input
                          {...field}
                          id="female"
                          value="female"
                          checked={field.value === 'female'}
                          name="gender"
                          type="radio"
                      />
                      <span className="tutorial-switch__text">Female</span>
                      <label htmlFor="female">Female</label>                      
                      </label>

                      <label className="radio-item tutorial-switch__item">
                      <input
                          {...field}
                          id="male"
                          value="male"
                          name="gender"
                          checked={field.value === 'male'}
                          type="radio"
                      />
                      <span className="tutorial-switch__text">Male</span>
                      <label htmlFor="male">Male</label>                               
                      </label>
                  </>
                  )}
                />                
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Height</div>
              <div className="tutorial-payment__field--row">
                <div className="tutorial-switch">
                <Field
                        name="measureSystem"
                        value={((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "metric") ? 'metric' : 'imperial')}
                        render={({ field }) => (
                        <>
                            <label className={"radio-item tutorial-switch__item " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "metric")? 'checked' : '')}>
                            <input
                                {...field}
                                id="metric"
                                value="metric"
                                checked={field.value === 'metric'}
                                name="measureSystem"
                                type="radio"
                            />
                            <span className="tutorial-switch__text">cm</span>
                            <label htmlFor="metric">cm</label>                      
                            </label>

                            <label className={"radio-item tutorial-switch__item " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "imperial")? 'checked' : '')}>
                            <input
                                {...field}
                                id="imperial"
                                value="imperial"
                                name="measureSystem"
                                checked={field.value === 'imperial'}
                                type="radio"
                            />
                            <span className="tutorial-switch__text">ft + in</span>
                            <label htmlFor="imperial">ft + in</label>                               
                            </label>
                        </>
                        )}
                    />
                </div>
                <div className={"tutorial-input tutorial-input--md " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "metric") ? 'show-input' : '')}>
                  <Field
                        name="currentHeight"
                        as={TextField}
                        placeholder="cm"
                        type="text"
                        value={JSON.stringify(currentHeight).replace(/['"]+/g, '')}
                    /> 
                </div>
                <div className={"tutorial-input tutorial-input--md tutorial-input--two-col " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "imperial")? 'show-input' : '')}>
                <Field
                        name="currentHeightFt"
                        as={TextField}
                        placeholder="ft"
                        type="text"
                        value={JSON.stringify(currentHeightFt).replace(/['"]+/g, '')}
                    /> 
                <Field
                        name="currentHeightIn"
                        as={TextField}
                        placeholder="in"
                        type="text"
                        value={JSON.stringify(currentHeightIn).replace(/['"]+/g, '')}
                    /> 
                </div>
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Weight</div>
              <div className="tutorial-payment__field--row">
                <div className="tutorial-switch">
                <Field
                        name="measureSystem"
                        value={((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "metric") ? 'metric' : 'imperial')}
                        render={({ field }) => (
                        <>
                            <label className={"radio-item tutorial-switch__item " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "metric")? 'checked' : '')}>
                            <input
                                {...field}
                                id="kg"
                                value="metric"
                                checked={field.value === 'metric'}
                                name="measureSystem"
                                type="radio"
                            />
                            <span className="tutorial-switch__text">Kg</span>
                            <label htmlFor="kg">Kg</label>                      
                            </label>

                            <label className={"radio-item tutorial-switch__item " + ((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "imperial")? 'checked' : '')}>
                            <input
                                {...field}
                                id="lbs"
                                value="imperial"
                                name="measureSystem"
                                checked={field.value === 'imperial'}
                                type="radio"
                            />
                            <span className="tutorial-switch__text">Lbs</span>
                            <label htmlFor="lbs">Lbs</label>                               
                            </label>
                        </>
                        )}
                    />                   
                </div>
                <div className="tutorial-input tutorial-input--md show-input">
                  <Field
                      name="currentWeight"
                      as={TextField}
                      placeholder={((JSON.stringify(measureSystem).replace(/['"]+/g, '') === "imperial")? 'lbs' : 'kg')}
                      type="text"
                      value={JSON.stringify(currentWeight).replace(/['"]+/g, '')}
                  /> 
                </div>
              </div>
            </div>
            <div className="tutorial-payment__field">
              <div className="tutorial-payment__label">Age</div>
              <div className="tutorial-payment__field--row">
                <div className="tutorial-input tutorial-input--md show-input">
                <Field
                      name="age"
                      as={TextField}
                      placeholder="y/o"
                      type="text"
                      value={JSON.stringify(age).replace(/['"]+/g, '')}
                  /> 
                </div>
              </div>
            </div>
          </div>
          <div className="tutorial-payment__field tutorial-payment__field--submit">
            <span className={"sign-in-error " + ((loggedIn) ? 'error-hidden' : '')}>
                Sign in to finish your Profile
            </span>
            <button
              className={"tutorial-btn tutorial-btn--theme tutorial-btn--block " + (!(loggedIn) ? 'tutorial-quiz__button--disabled' : '')}
              type="submit"
            >
              finish sign up
            </button>
            <div className="tutorial-quiz__note tutorial-quiz__note--sm">
              <p>
                By clicking «Finish Sign Uo» i confirm that i have read and
                agree to{" "}
                <a className="text-theme" href="#" target="_blank">
                  privacy policy
                </a>
                ,{" "}
                <a className="text-theme" href="#" target="_blank">
                  terms of service
                </a>{" "}
                and{" "}
                <a className="text-theme" href="#" target="_blank">
                  billing terms
                </a>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tutorial-quiz__bottom tutorial-quiz__bottom--compact">
        <p className="text-md">
          <span>15 Cutter Mill rd Unit 545, Great Neck, NY, 110212020 /n Tebepaket Inc. All rights reserved </span>
        </p>
        <div className="tutorial-quiz__note tutorial-quiz__note--sm">
          <p>
            Have a question? Reach our friendly support team{" "}
            <a className="text-theme" href="#" target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};