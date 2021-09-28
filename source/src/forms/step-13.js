import React from "react";
import { Field } from "formik";

export class Step13 extends React.Component {
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
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress forty-five-percent"></div>
            <div className="tutorial-progressbar__container">
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">1</div>
            </div>
            <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
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
            <div className="tutorial-quiz__title tutorial-quiz__title--left">As a {JSON.stringify(this.props.values.gender).replace(/['"]+/g, '')} in your {JSON.stringify(this.props.values.age).replace(/['"]+/g, '')}'s, environment has a huge impact on your ability to lose weight. Which is true about the <span className="text-demi">area you live </span> in?</div>
            <Field
                    name="liveArea"
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="city"
                            value="city"
                            checked={field.value === 'city'}
                            name="liveArea"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">A major city</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="country"
                            value="country"
                            name="liveArea"
                            checked={field.value === 'country'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">The country</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="suburbs"
                            value="suburbs"
                            name="liveArea"
                            checked={field.value === 'suburbs'}
                            type="radio"
                            onClick={this.handleClick}
                            
                            />
                            <span className="tutorial-quiz__text">The suburbs</span>                              
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
