import React from "react";
import PopupIcon2 from '../images/popup-icon-2.svg';
import $ from 'jquery';
import { Field } from "formik";
import { Circle } from 'rc-progress';

export class Step30 extends React.Component {
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
        if (newPercent === 81) {
            $('.tutorial-quiz__title').find('.tutorial-active').removeClass('tutorial-active');
            $('.tutorial-quiz__title--dynamic').eq(2).addClass('tutorial-active')
        }        
        if (newPercent === 77) {
          clearTimeout(this.tm);
          this.setState({ percent: 79 });
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
                      Matching Behavior Trends
                    </div>
                    <div
                      className="tutorial-quiz__title tutorial-quiz__title--dynamic"
                      id="loadingTitle2"
                    >
                      Building Habit Profile
                    </div>
                    <div
                      className="tutorial-quiz__title tutorial-quiz__title--dynamic"
                      id="loadingTitle3"
                    >
                      Assessing Underlying Psychology
                    </div>
                  </div>
                </div>
                <div className="tutorial-quiz__section">
                  <div className="tutorial-analyze">
                    <div className="tutorial-analyze__container">
                      <div
                        className="tutorial-analyze__loader second-step-circle"
                        id="analyzeLoader"
                      >
                        <Circle className="third-circle" percent="0" strokeWidth="0" strokeColor="#1CC68F" />  
                        <Circle className="second-circle" percent={percent} strokeWidth="17" strokeColor="#74D24D" />                                              
                        <Circle className="first-circle" percent="100" strokeWidth="27" strokeColor="#ABD73D" />                        
                      </div>
                    </div>
                    <div className="tutorial-analyze__title">Habits and Behaviors</div>
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
                        <img src={PopupIcon2} alt="" />
                        </div>
                        <div className="tutorial-popup__text">
                        <p>
                            Do you tend to have your meals at the same time every day?
                        </p>
                        </div>
                        <div className="tutorial-popup__buttons">
                        <Field
                            name="eatTheSameTime"
                            render={({ field }) => (
                                <>
                                <div className="tutorial-popup__button js-popup-close js-processing-continue">
                                    <input
                                    {...field}
                                    id="yes"
                                    value="yes"
                                    checked={field.value === 'yes'}
                                    name="eatTheSameTime"
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
                                    name="eatTheSameTime"
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
