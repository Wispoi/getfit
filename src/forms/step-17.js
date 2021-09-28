import React from "react";
import { StepButton } from "../StepButton";
import SuccessIcon from '../images/success-icon.svg';
export const Step17 = formikProps => {
  const { errors, step, values} = formikProps;

  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
    <div className="tutorial-quiz__section tutorial-quiz__section--top">
      <div className="tutorial-quiz__success">
        <img src={SuccessIcon} alt=""/>
      </div>
      <p className="tutorial-quiz__title tutorial-quiz__title--lg tutorial-quiz__title--left">
        Halfway there!
      </p>
      <p className="tutorial-quiz__title tutorial-quiz__title--left">
        <span className="text-demi">Now let's get to tailoring your plan.</span>
      </p>
      <p className="tutorial-quiz__title tutorial-quiz__title--left">
        Please think over each answer as they will help us craft the perfect
        plan for you
      </p>
    </div>
    <div className="tutorial-quiz__section">
        <StepButton step={step} errors={errors} values={values}/>
    </div>
  </div>
  );
};
