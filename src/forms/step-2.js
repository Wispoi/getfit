import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { StepButton } from "../StepButton";

export class Step2 extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.currentWeight) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
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
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress ten-percent"></div>
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
                <div className="tutorial-quiz__title">What's your height and weight?</div>
            </div>
            <div className="tutorial-quiz__section">
                <div className="tutorial-quiz__group">
                    <div className="tutorial-quiz__input tutorial-quiz__input--lg">
                        <div className={"tutorial-input tutorial-input--underline " + ((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "imperial") ? 'tutorial-input__hidden' : '') + ((this.props.values.currentHeight) ? 'tutorial-input--value' : '')}>
                            <Field
                                name="currentHeight"
                                as={TextField}
                                placeholder="0"
                                type="number"
                                maxLength="3"
                                className="js-input-focus js-input-number"
                            />                                             
                            <div className="tutorial-input__label" id="currentHeight">
                                cm
                            </div>
                        </div>
                        <div className={"tutorial-input tutorial-input--underline " + ((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'tutorial-input__hidden' : '') + ((this.props.values.currentHeightFt) ? 'tutorial-input--value' : '')}>
                            <Field
                                name="currentHeightFt"
                                as={TextField}
                                placeholder="0"
                                type="number"
                                maxLength="3"
                                className="js-input-focus js-input-number"
                            />                                             
                            <div className="tutorial-input__label" id="currentHeightFt">
                                ft.
                            </div>
                        </div>                        
                        <div className={"tutorial-input tutorial-input--underline " + ((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'tutorial-input__hidden' : '') + ((this.props.values.currentHeightIn) ? 'tutorial-input--value' : '')}>
                            <Field
                                name="currentHeightIn"
                                as={TextField}
                                placeholder="0"
                                type="number"
                                maxLength="3"
                                className="js-input-focus js-input-number"
                            />                                             
                            <div className="tutorial-input__label" id="currentHeightIn">
                                in.
                            </div>
                        </div>                        
                    </div>
                    <div className={"tutorial-quiz__input tutorial-quiz__input--lg tutorial-quiz__input--indent " + ((this.props.values.currentWeight) ? 'tutorial-input--value' : '')}>
                        <div className={"tutorial-input tutorial-input--underline  " + ((this.props.values.currentWeight) ? 'tutorial-input--value' : '')}>
                        <Field
                            name="currentWeight"
                            as={TextField}
                            maxLength={3}
                            placeholder="0"
                            className="js-input-focus js-input-number"
                        />                            
                        
                        <div className="tutorial-input__label" id="currentWeight">
                        {((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'kg' : 'lbs')}
                        </div>
                        </div>
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
