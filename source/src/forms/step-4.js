import React from "react";
import { Field } from "formik";

export class Step4 extends React.Component {
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
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress twenty-percent"></div>
            <div className="tutorial-progressbar__container">
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">1</div>
            </div>
            <div className="tutorial-progressbar__item">
                <div className="tutorial-progressbar__num">2</div>
            </div>
            <div className="tutorial-progressbar__item">
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
            <div className="tutorial-quiz__title tutorial-quiz__title--left">What is your age?</div>
            <Field
                    name="age"
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="20"
                            value="20"
                            checked={field.value === '20'}
                            name="age"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">20s</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="30"
                            value="30"
                            name="age"
                            checked={field.value === '30'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">30s</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="40"
                            value="40"
                            checked={field.value === '40'}
                            name="age"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">40s</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="50"
                            value="50"
                            name="age"
                            checked={field.value === '50'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">50s</span>                              
                        </label>   
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="60"
                            value="60"
                            checked={field.value === '60'}
                            name="age"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">60s</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="70"
                            value="70"
                            name="age"
                            checked={field.value === '70'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">70+</span>                              
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
