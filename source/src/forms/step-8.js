import React from "react";
import { StepButton } from "../StepButton";
import MemberImage2x from '../images/member-image@2x.png';
import MemberImage from '../images/member-image.png'
export const Step8 = formikProps => {
  const { errors, step, values} = formikProps;

  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
        <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
            <div className="tutorial-quiz__list">
            <div className="tutorial-quiz__section">
                <div className="tutorial-quiz__title tutorial-quiz__title--left">
                Sticking to a plan has never been easier with Fitness by GetFit
                </div>
                <div className="tutorial-quote">
                <div className="tutorial-quote__image">
                    <img
                    className="__image"
                    src={MemberImage}
                    srcSet={MemberImage2x + " 2x"}
                    alt=""
                    />
                </div>
                <div className="tutorial-quote__content">
                    <div className="tutorial-quote__text">
                    «GetFit fits into my lifestyle perfectly. I can turn to this app
                    day or night and they’re there for me»
                    </div>
                    <div className="tutorial-quote__note">Isabel Chambers</div>
                </div>
                </div>
                <p className="tutorial-quiz__note tutorial-quiz__note--left tutorial-quiz__note--sm">
                * People who use GetFit and adopt a healthy lifestyle can expect to
                lose 0.5-1 kgs per week
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
