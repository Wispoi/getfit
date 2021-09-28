import React from "react";
import ChartHugeSm2x from '../images/chart-huge-sm@2x.png';
import ChartHugeSm from '../images/chart-huge-sm.png';
import ChartHugeSmReverse2x from '../images/chart-huge-sm@2x-reversed.png';
import ChartHugeSmReverse from '../images/chart-huge-sm-reversed.png';
import SubscribeTeam2x from '../images/subscription-team@2x.png';
import Visa2x from '../images/visa-mastercard@2x.png';
import Visa from '../images/visa-mastercard.png';
import AmExpress2x from '../images/american-express@2x.png';
import AmExpress from '../images/american-express.png';
import Countdown from 'react-countdown';

export class Step32 extends React.Component {
    constructor() {
        super();
        this.state = {
          showForm: false,
          reversed: false
        };
    }    
    componentDidMount() {
        this.setState({ showForm: false });
        this.reverseChart();
    }      

    handleClick = (e) => {
        this.setState({ showForm: true });
    }   
    reverseChart() {
      const idealWeight = JSON.stringify(this.props.values.idealWeight).replace(/['"]+/g, '');
      const currentWeight = JSON.stringify(this.props.values.currentWeight).replace(/['"]+/g, '');
      if (idealWeight - currentWeight > 0) {
          this.setState({ reversed: true })
          return;
      }
    } 
    render() {
      const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return;
        } else {
          // Render a countdown
          return <span>{minutes}:{seconds}</span>;
        }
      };
        return (
            <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
            <div className="tutorial-quiz__section tutorial-quiz__section--image">
              <div
                className="tutorial-quiz__bg"
                style={{ backgroundImage: `url(${SubscribeTeam2x})`}}
              ></div>
            </div>
            <div className="tutorial-quiz__section tutorial-quiz__section--top tutorial-quiz__section--radius">
              <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize tutorial-quiz__title--md">
                Your Personalized Course
              </div>
              <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--fullsize">
                Start Your Transformation Today! 
              </div>
              <div className="tutorial-alert">
                <div className="tutorial-alert__title">
                  Your personalized plan has been reserved for the next 15 minutes!
                </div>
                <div className="tutorial-alert__text">
                  Save your profile below to claim it now
                </div>
                <div className="tutorial-alert__sub">Time remaining:</div>
                <div className="tutorial-alert__counter">
                    <div
                        className="tutorial-alert__times js-countdown"
                        data-countdown-time="2020/04/06 14:00"
                    >
                    <Countdown date={Date.now() + 899000}
                      renderer={renderer}
                    >
                      
                  </Countdown>
                    </div>
                </div>
              </div>
              <div className={"tutorial-result " + (!(this.state.reversed === false) ? 'tutorial-result--reversed' : '')}>
                    <div className="tutorial-result__container">
                    <img
                        src={!(this.state.reversed === true) ? ChartHugeSm : ChartHugeSmReverse}
                        srcSet={!(this.state.reversed === true) ? ChartHugeSm2x : ChartHugeSmReverse2x + " 2x"}
                        alt=""
                    />
                    <div className="tutorial-result__title tutorial-result__title--left">
                        Initial weight
                    </div>
                    <div className="tutorial-result__title tutorial-result__title--right">
                        Your goal
                    </div>
                    <div className="tutorial-result__value tutorial-result__value--left">
                        {JSON.stringify(this.props.values.currentWeight).replace(/['"]+/g, '')} {((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'kg' : 'lbs')}
                    </div>
                    <div className="tutorial-result__value tutorial-result__value--right">
                        {JSON.stringify(this.props.values.idealWeight).replace(/['"]+/g, '')} {((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'kg' : 'lbs')}
                    </div>
                  <div className="tutorial-result__content">
                    <div className="tutorial-result__list">
                      <div className="tutorial-result__heading">
                        Highlights of your customized plan
                      </div>
                      <div className="tutorial-result__item">
                        <div className="tutorial-result__icon">
                        <svg className="tutorial-icon" viewBox="0 0 17 12" id="ic-check" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M1.554 4.347L0 5.884 6.29 12 17 1.533 15.442 0 6.286 8.948 1.554 4.347z"
                        />
                        </svg>
                        </div>
                        Focusing on healthy weight loss
                      </div>
                      <div className="tutorial-result__item">
                        <div className="tutorial-result__icon">
                        <svg className="tutorial-icon" viewBox="0 0 17 12" id="ic-check" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M1.554 4.347L0 5.884 6.29 12 17 1.533 15.442 0 6.286 8.948 1.554 4.347z"
                        />
                        </svg>
                        </div>
                        With customizations for physical limitations
                      </div>
                      <div className="tutorial-result__item">
                        <div className="tutorial-result__icon">
                        <svg className="tutorial-icon" viewBox="0 0 17 12" id="ic-check" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M1.554 4.347L0 5.884 6.29 12 17 1.533 15.442 0 6.286 8.948 1.554 4.347z"
                        />
                        </svg>                        </div>
                        With customizations for physical limitations
                      </div>
                      <div className="tutorial-result__item">
                        <div className="tutorial-result__icon">
                        <svg className="tutorial-icon" viewBox="0 0 17 12" id="ic-check" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M1.554 4.347L0 5.884 6.29 12 17 1.533 15.442 0 6.286 8.948 1.554 4.347z"
                        />
                        </svg>
                        </div>
                        Adjustments for dietary restrictions
                      </div>
                      <div className="tutorial-result__item">
                        <div className="tutorial-result__icon">
                        <svg className="tutorial-icon" viewBox="0 0 17 12" id="ic-check" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M1.554 4.347L0 5.884 6.29 12 17 1.533 15.442 0 6.286 8.948 1.554 4.347z"
                        />
                        </svg>
                        </div>
                        Tailored to your busy lifestyle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tutorial-plan">
                <div className="parts-row parts-justify parts-md parts-space">
                  <div className="col">
                    <span className="tutorial-plan__title">7-Day Trial </span>
                  </div>
                  <div className="col">
                    <span className="tutorial-plan__title">1$</span>
                  </div>
                </div>
                <div className="parts-row parts-justify parts-md parts-space">
                  <div className="col">
                    <span className="tutorial-plan__title">After trial  </span>
                  </div>
                  <div className="col">
                    <span className="tutorial-plan__title">90$ / 2 months</span>
                  </div>
                </div>                
                <div className="parts-row parts-justify parts-md parts-space">
                  <div className="col">
                    <span className="tutorial-plan__title"> <strong>Total Today </strong></span>
                  </div>
                  <div className="col">
                    <span className="tutorial-plan__title"><strong>1$</strong></span>
                  </div>
                </div> 
              </div>
              <div
                className={"tutorial-quiz__button tutorial-quiz__button--fullsize js-toggle " + ((this.state.showForm) ? 'tutorial-quiz__button--hidden' : '')}
                onClick={this.handleClick}
              >
                Continue
              </div>
              <div className={"tutorial-payment " + ((this.state.showForm) ? 'tutorial-active' : '')}>
                <form>
                  <div className="tutorial-payment__title">Payment method</div>
                  <div className="tutorial-payment__nav">
                    <div className="tutorial-payment__item tutorial-active">
                        <img
                            src={Visa}
                            srcSet={Visa2x + " 2x"}
                            alt=""
                        />
                    </div>
                    <a
                      className="tutorial-payment__item"
                      href="https://www.americanexpress.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img
                            src={AmExpress}
                            srcSet={AmExpress2x + " 2x"}
                            alt=""
                        />
                    </a>
                  </div>
                  <div className="tutorial-payment__field">
                    <div className="tutorial-payment__label">Card number</div>
                    <div className="tutorial-input tutorial-input--md">
                      <input
                        type="tel"
                        name="card_number"
                        data-inputmask="'mask': '9999 9999 9999 9999'"
                      />
                    </div>
                  </div>
                  <div className="tutorial-payment__field">
                    <div className="parts-row parts-4 parts-space-md">
                      <div className="col part-2">
                        <div className="tutorial-payment__label">Expires on</div>
                        <div className="tutorial-input tutorial-input--md">
                          <input
                            type="tel"
                            placeholder="MM/YY"
                            name="expires_on"
                            data-inputmask="'mask': '99/99'"
                          />
                        </div>
                      </div>
                      <div className="col part-2">
                        <div className="tutorial-payment__label">Security Code</div>
                        <div className="tutorial-input tutorial-input--md">
                          <input
                            type="tel"
                            placeholder="3 Digits"
                            name="security_code"
                            data-inputmask="'mask': '999'"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tutorial-payment__field tutorial-payment__field--submit">
                    <button
                      className="tutorial-btn tutorial-btn--theme tutorial-btn--block"
                      type="submit"
                    >
                      Save profile
                    </button>
                  </div>
                </form>
              </div>
              <div className="tutorial-quiz__bottom tutorial-quiz__bottom--compact">              
                <p className="text-md text-left">
                    *Your 14-Day Trial will last until 
                    (today date + 14 days).
                     You can cancel anytime before then and will not be charged the full program amount. No questions asked, no small print. If you decide GetFit is good for you, on 
                     (today date + 14 days) 
                     you will be charged one payment for $89.99 for your 2 months course ($44.99/month). GetFit will automatically charge your card $89.99 every 2 months so you don’t lose access to your account. No refunds or credits except if you don’t see results and follow our money-back policy. To cancel, simply let us know by email:&nbsp; 
                     <a className="text-theme" href="mailto:support@getfitapps.com" target="_blank" rel="noopener noreferrer">
                      support@getfitapps.com
                    </a>                     
                </p>
                <div className="tutorial-quiz__note tutorial-quiz__note--sm">
                  <p>
                    Have a question? Reach our friendly support team{" "}
                    <a className="text-theme" href="#" target="_blank" rel="noopener noreferrer"  >
                      here
                    </a>
                  </p>
                </div>
                <p className="text-md">15 Cutter Mill rd Unit 545, Great Neck, NY, 110212020 /n Tebepaket Inc. All rights reserved </p>                
              </div>
            </div>
            <div className="tutorial-quiz__section tutorial-quiz__loader tutorial-quiz__section--radius">
              <div className="tutorial-quiz__loader--icon">
                <div className="lds-default">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="tutorial-quiz__loader--text">
                <div className="tutorial-alert__title">
                  Your account is being created. Please do not click back or refresh the
                  page
                </div>
              </div>
            </div>
          </div>
        );
    }
};
