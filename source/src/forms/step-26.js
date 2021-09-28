import React from "react";
import { Field } from "formik";

export class Step26 extends React.Component {
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
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress eighty-five-percent"></div>
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
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">4</div>
            </div>
            </div>
        </div>
        </div>
        <div className="tutorial-quiz__list">
        <div className="tutorial-quiz__item tutorial-quiz__item--current">
            <div className="tutorial-quiz__section tutorial-quiz__section--top">
            <div className="tutorial-quiz__title tutorial-quiz__title--left">Apart from your weight goal, what's a goal you would like to achieve with your plan?</div>
            <Field
                    name="goal"
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="0"
                            value="0"
                            checked={field.value === '0'}
                            name="goal"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Get leaner body</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="1"
                            value="1"
                            name="goal"
                            checked={field.value === '1'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Be able to do outdoor activities</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="2"
                            value="2"
                            checked={field.value === '2'}
                            name="goal"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Feel more comfortable and confident in my body</span>                     
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="3"
                            value="3"
                            name="goal"
                            checked={field.value === '3'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Feel healthier</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="4"
                            value="4"
                            checked={field.value === '4'}
                            name="goal"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Other</span>                     
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
