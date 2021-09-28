import React from "react";
import ImageStep1 from '../images/image_step1.svg';
import ImageStep2 from '../images/image_step2.svg';
export const FormFirstStep = formikProps => {
  return (
    <>
    <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
      <div className="tutorial-quiz__section tutorial-quiz__section--top tutorial-quiz__section--radius">
        <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize tutorial-quiz__title--md">
          We’ve automatically upgraded your account!
        </div>
        <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize">
          <span>
            You already have a GetFit account, so if you currently have the app
            installed, just open the app!
          </span>{" "}
          If not, follow the directions below.
        </div>
        <div className="tutorial-steps">
          <div className="tutorial-steps__step">
            <div className="tutorial-steps__title">Step 1</div>
            <div className="tutorial-steps__subtitle">
              Download application from AppStore
            </div>
            <div className="tutorial-steps__content">
              <a href>
                <img src={ImageStep1} alt="" />
              </a>
            </div>
          </div>
          <div className="tutorial-steps__step">
            <div className="tutorial-steps__title">Step 2</div>
            <div className="tutorial-steps__subtitle">
              Open it and sign in to your account
            </div>
            <div className="tutorial-steps__content">
              <a href>
              <img src={ImageStep2} alt="" />
              </a>
            </div>
          </div>
          <div className="tutorial-steps__step">
            <div className="tutorial-steps__title">
              If you currently have the app installed, just open the app!
            </div>
          </div>
        </div>
        <div className="tutorial-quiz__bottom tutorial-quiz__bottom--compact">
          <div className="tutorial-quiz__note tutorial-quiz__note--sm">
            <p>
              Have a question? Reach our friendly support team{" "}
              <a className="text-theme" href="#" target="_blank" rel="noopener noreferrer">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
