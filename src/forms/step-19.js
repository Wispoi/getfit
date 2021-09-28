import React from "react";
import { Field } from "formik";

export class Step19 extends React.Component {
    handleClick = (e) => {
        setTimeout(() => {
            this.inputElement.click();
          }, 50);
      }   
    render() {
  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible">
        <div className="tutorial-quiz__head">
        <div className="tutorial-quiz__title tutorial-quiz__title--main">
            Demographic Profile
        </div>
        <div className="tutorial-progressbar">
            <div className="tutorial-progressbar__line"></div>
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress thirty-percent"></div>
            <div className="tutorial-progressbar__container">
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">1</div>
            </div>
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">2</div>
            </div>
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">3</div>
            </div>
            <div className="tutorial-progressbar__item">
                <div className="tutorial-progressbar__num">4</div>
            </div>
            </div>
        </div>
        </div>
        <div className="tutorial-quiz__list">
        <div className="tutorial-quiz__item tutorial-quiz__item--current">
            <div className="tutorial-quiz__section tutorial-quiz__section--top">
            <div className="tutorial-quiz__title tutorial-quiz__title--left">Do you have any <span className="text-demi">physical limitations</span>?</div>
            <Field
                    name="physicalLimitations "
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="yes"
                            value="yes"
                            checked={field.value === 'yes'}
                            name="physicalLimitations "
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Yes</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="No"
                            value="No"
                            name="physicalLimitations "
                            checked={field.value === 'No'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">No</span>                              
                        </label>                                              
                        </>
                    )}
                    />          
                    <button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="tutorial-quiz__button tutorial-quiz__button--hidden"
                    ref={input => this.inputElement = input}
                    >
                    Continue
                    </button>     
            </div>
        </div>
        </div>
    </div>
  );
    }
};
