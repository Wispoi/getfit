import React from "react";
import { StepButton } from "../StepButton";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import Slider from "react-slick";

export class Step1 extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.idealWeight) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

    render() {
        const settings = {
        };        
          
        return (
            <div className="tutorial-quiz__container tutorial-quiz__container--visible">
                
                <div className="tutorial-members tutorial-quiz__button--hidden">
                    <Slider {...settings} className="tutorial-members__slider js-slick-slider">
                        <div className="tutorial-members__slide">
                        </div>
                        <div className="tutorial-members__slide">
                        </div>
                    </Slider>
                </div> 
                             
                <div className="tutorial-quiz__head">
                    <div className="tutorial-quiz__title tutorial-quiz__title--main">
                    Demographic Profile
                    </div>
                    <div className="tutorial-progressbar">
                    <div className="tutorial-progressbar__line"></div>
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
                <div 
                    className="tutorial-quiz__list"
                    onKeyDown={this.onKeyDown}
                    tabIndex="0"
                >
                    <div className="tutorial-quiz__item tutorial-quiz__item--current">
                        <div className="tutorial-quiz__section">
                            <div className="tutorial-quiz__title">What is your ideal weight?</div>
                        </div>
                        <div className="tutorial-quiz__section">
                            <div className="tutorial-quiz__group">
                            <div className="tutorial-quiz__input tutorial-quiz__input--lg tutorial-quiz__input--center">
                                <div className={"tutorial-input tutorial-input--underline  " + ((this.props.values.idealWeight) ? 'tutorial-input--value' : '')}>
                                <Field
                                    name="idealWeight"
                                    as={TextField}
                                    placeholder="0"
                                    type="number"
                                    maxLength="3"
                                        
                                />
                                
                                <div className="tutorial-input__label">
                                    {((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'kg' : 'lbs')}
                                </div>
                                </div>
                            </div>
                            <div className="tutorial-switch">
                            <Field
                                name="measureSystem"
                                render={({ field }) => (
                                <>
                                    <label className="radio-item tutorial-switch__item">
                                    <input
                                        {...field}
                                        id="metric"
                                        value="metric"
                                        checked={field.value === 'metric'}
                                        name="measureSystem"
                                        type="radio"
                                    />
                                    <span className="tutorial-switch__text">KG</span>
                                    <label htmlFor="metric">Kg</label>                      
                                    </label>

                                    <label className="radio-item tutorial-switch__item">
                                    <input
                                        {...field}
                                        id="imperial"
                                        value="imperial"
                                        name="measureSystem"
                                        checked={field.value === 'imperial'}
                                        type="radio"
                                    />
                                    <span className="tutorial-switch__text">LBS</span>
                                    <label htmlFor="imperial">Lbs</label>                               
                                    </label>
                                </>
                                )}
                            /> 
                            </div>
                            </div>
                        </div>
                        <div className="tutorial-quiz__section">
                            <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
};
