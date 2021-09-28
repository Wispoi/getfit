import React from "react";
import { StepButton } from "../StepButton";
export const Step25 = formikProps => {
  const { errors, step, values} = formikProps;

  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible">
    <div className="tutorial-quiz__list">
      <div className="tutorial-quiz__item tutorial-quiz__item--current">
        <div className="tutorial-quiz__section">
          <p className="tutorial-quiz__title tutorial-quiz__title--lg tutorial-quiz__title--left">
            Good planning is more than half the battle!
          </p>
          <p className="tutorial-quiz__title tutorial-quiz__title--left text-demi">
            Did you know...
          </p>
          <p className="tutorial-quiz__title tutorial-quiz__title--left">
            Setting small goals provides for more wins.
          </p>
          <p className="tutorial-quiz__title tutorial-quiz__title--left">
            Each goal reached keeps you motivated.
          </p>
          <p className="tutorial-quiz__title tutorial-quiz__title--left">
            Motivation helps you crush more goals.
          </p>
          <p className="tutorial-quiz__title tutorial-quiz__title--left text-demi">
            So let's get down to this...
          </p>
        </div>
        <div className="tutorial-quiz__section">
            <StepButton step={step} errors={errors} values={values}/>
        </div>
      </div>
    </div>
  </div>
  );
};
