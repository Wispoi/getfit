import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { StepButton } from "../StepButton";

export const Step28= formikProps => {
  const { errors, step, values} = formikProps;

  return (
    <div className="tutorial-quiz__list tutorial-quiz__list--form">
    <div className="tutorial-quiz__form">
        <div className="tutorial-quiz__section">
            <div className="tutorial-quiz__title tutorial-quiz__title--lg">
                Confirm your account information
            </div>
        </div>
      <div className="tutorial-quiz__section">
        <div className="tutorial-quiz__input tutorial-quiz__input--center tutorial-quiz__input--text">
          <div className={"tutorial-input tutorial-input--underline " + ((values.givenName) ? 'tutorial-input--value' : '')}>
            <Field
                name="givenName"
                as={TextField}
                type="text"
                placeholder="Name"
                className="js-input-focus js-input-number fullwidth"
            />                   
          </div>
        </div>
        <div className="tutorial-quiz__input tutorial-quiz__input--center tutorial-quiz__input--text tutorial-quiz__input--indent">
            <div className={"tutorial-input tutorial-input--underline " + ((values.email) ? 'tutorial-input--value' : '')}>
            <Field
                name="email"
                as={TextField}
                type="email"
                value={values.email}
                placeholder="Email"
                className="js-input-focus js-input-number fullwidth"
            />  
            </div>
        </div>        
      </div>
      <div className="tutorial-quiz__section">
        <StepButton step={step} errors={errors} values={values}/>
        <div className="tutorial-quiz__bottom">
          <div className="tutorial-quiz__note tutorial-quiz__note--sm">
            <p>
              By submitting your email address, you may also receive email
              offers from us on GetFit products and services. You may
              unsubscribe at any time.
            </p>
            <div className="parts-row parts-center parts-space-sm">
              <div className="col">
                <a className="text-color-base" href="http://" target="_blank" rel="noopener noreferrer">
                  Privacy Policy{" "}
                </a>
              </div>
              <div className="col">
                &nbsp;<span className="text-color-base">|</span>&nbsp;
              </div>
              <div className="col">
                <a className="text-color-base" href="http://" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
