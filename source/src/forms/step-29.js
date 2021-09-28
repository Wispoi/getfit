import React from "react";
import PopupIcon1 from '../images/popup-icon-1.svg';
import $ from 'jquery';
import { Field } from "formik";
import { Circle } from 'rc-progress';

export class Step29 extends React.Component {
    constructor() {
        super();
        this.state = {
          percent: 0,
          thousand: Math.floor(Math.random() * 50) + 50,
          hundred: Math.floor(Math.random() * 899) + 100,
        };
        this.increase = this.increase.bind(this);
    }    
    componentDidMount() {
        this.increase();
    }     
    increase() {
        const { percent } = this.state;
        const newPercent = percent + Math.floor(Math.random() * 2);
        if (newPercent === 40) {
            $('.tutorial-quiz__title').find('.tutorial-active').removeClass('tutorial-active');
            $('.tutorial-quiz__title--dynamic').eq(1).addClass('tutorial-active')
        }
        if (newPercent === 80) {
            $('.tutorial-quiz__title').find('.tutorial-active').removeClass('tutorial-active');
            $('.tutorial-quiz__title--dynamic').eq(2).addClass('tutorial-active')
        }        
        if (newPercent === 73) {
          clearTimeout(this.tm);
          this.setState({ percent: 75 });
          $('.tutorial-popup').addClass('tutorial-active')
          return;
        }
        if (newPercent >= 100) {
            setTimeout(this.inputElement.click())
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 50);
    }   

    handleClick = (e) => {
        $('.tutorial-popup').removeClass('tutorial-active')
        this.increase();
    }   

    render() {
        const { percent } = this.state;
        return (
        <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
            <div className="tutorial-quiz__list">
              <div className="tutorial-quiz__item tutorial-quiz__item--current">
                <div className="tutorial-quiz__section">
                  <div className="tutorial-quiz__title">
                    <div
                      className="tutorial-quiz__title tutorial-quiz__title--dynamic tutorial-active"
                      id="loadingTitle1"
                    >
                      Analyzing Demographic Responses
                    </div>
                    <div
                      className="tutorial-quiz__title tutorial-quiz__title--dynamic"
                      id="loadingTitle2"
                    >
                      Updating Body Type Parameters
                    </div>
                    <div
                      className="tutorial-quiz__title tutorial-quiz__title--dynamic"
                      id="loadingTitle3"
                    >
                      Cross-checking With User Database
                    </div>
                  </div>
                </div>
                <div className="tutorial-quiz__section">
                  <div className="tutorial-analyze">
                    <div className="tutorial-analyze__container">
                      <div
                        className="tutorial-analyze__loader"
                        id="analyzeLoader"
                      >
                        <Circle className="third-circle" percent="100" strokeWidth="10" strokeColor="#eceff4" />  
                        <Circle className="second-circle" percent="100" strokeWidth="15" strokeColor="#eceff4" />                                              
                        <Circle className="first-circle" percent={percent} strokeWidth="27" strokeColor="#ABD73D" />
                      </div>
                    </div>
                    <div className="tutorial-analyze__title">Demographic profile</div>
                    <div className="tutorial-analyze__number">
                      <span className="tutorial-analyze__value">{percent}</span>
                      <span>%</span>
                    </div>
                    <div
                      className="js-popup-open"
                      id="loaderInit"
                      data-popup-target="#loaderPopup"
                      data-path="loader-1.json"
                      data-direct="step-30.html"
                    />
                  </div>
                </div>
                <div className="tutorial-quiz__section">
                  <div className="tutorial-quiz__bottom">
                    <div className="tutorial-quiz__note tutorial-quiz__note--sm">
                      <p>
                        Sit tight! We’re building your perfect plan based on millions
                        of data points from successful GetFit users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
                variant="contained"
                color="primary"
                type="submit"
                className="tutorial-quiz__button tutorial-quiz__button--hidden"
                ref={input => this.inputElement = input}
                >
                Continue
            </button> 
            <div className="tutorial-popup tutorial-popup--inline">
                <div className="tutorial-popup__container">
                <div className="tutorial-popup__content">
                    <div
                    className="tutorial-popup__item tutorial-popup__item--sm tutorial-active"
                    id="loaderPopup"
                    >
                    <div className="tutorial-popup__message">
                        <div className="tutorial-popup__icon">
                        <img src={PopupIcon1} alt="" />
                        </div>
                        <div className="tutorial-popup__text">
                        <p>
                            Is there a history of heart disease or diabetes in your extended
                            family?
                        </p>
                        </div>
                        <div className="tutorial-popup__buttons">
                        <Field
                            name="heartOrDiabetesFamily"
                            render={({ field }) => (
                                <>
                                <div className="tutorial-popup__button js-popup-close js-processing-continue">
                                    <input
                                    {...field}
                                    id="yes"
                                    value="yes"
                                    checked={field.value === 'yes'}
                                    name="heartOrDiabetesFamily"
                                    type="radio"
                                    onClick={this.handleClick}
                                    />
                                    <span className="text-demi text-color-base">Yes</span>                     
                                </div>

                                <div className="tutorial-popup__button js-popup-close js-processing-continue">
                                    <input
                                    {...field}
                                    id="no"
                                    value="no"
                                    name="heartOrDiabetesFamily"
                                    checked={field.value === 'no'}
                                    type="radio"
                                    onClick={this.handleClick}
                                    
                                    />
                                    <span className="text-demi text-color-base">No</span>                              
                                </div>
                                                    
                                </>
                            )}
                            />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        );
    }
};
