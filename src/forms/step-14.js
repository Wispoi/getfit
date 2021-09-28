import React from "react";
import Chart2x2 from '../images/chart-2@2x.png';
import Chart2 from '../images/chart-2.png';
import Chart3x2 from '../images/tutor_chart_2@2x.png';
import Chart3 from '../images/tutor_chart_2.png';
import LogoGetFit2x from '../images/logo-getfit@2x.png';
import LogoGetFit from '../images/logo-getfit.png';
import { Line} from 'rc-progress';
export class Step14 extends React.Component {
    constructor() {
        super();
        this.state = {
          percent: 0,
          thousand: Math.floor(Math.random() * 50) + 50,
          hundred: Math.floor(Math.random() * 899) + 100,
          reversed: false
        };
        this.increase = this.increase.bind(this);
    }    
    componentDidMount() {
        this.increase();
        this.reverseChart();
    }     
    increase() {
        const { percent } = this.state;
        const newPercent = percent + Math.floor(Math.random() * 3);
        if (newPercent >= 110) {
          clearTimeout(this.tm);
          return;
        }
        if (newPercent >= 100) {
            setTimeout(this.inputElement.click())
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 100);
    }   
    reverseChart() {
        const idealWeight = JSON.stringify(this.props.values.idealWeight).replace(/['"]+/g, '');
        const currentWeight = JSON.stringify(this.props.values.currentWeight).replace(/['"]+/g, '');
        if (idealWeight - currentWeight > 0) {
            this.setState({ reversed: true })
            return;
        }
    } 
    handleClick = (e) => {
        setTimeout(() => {
            this.inputElement.click();
          }, 50);
      }   

    render() {
        const { percent } = this.state;
        return (
            <div className="tutorial-quiz__container tutorial-quiz__container--visible">
                <div className="tutorial-logo">
                <img src={LogoGetFit} srcSet={LogoGetFit2x + " 2x"} alt="" />
                </div>
                <div className="tutorial-quiz__list">
                <div className="tutorial-quiz__item tutorial-quiz__item--current">
                    <div className="tutorial-quiz__section">
                    <div className="tutorial-quiz__title">
                        We’ve helped {this.state.thousand},{this.state.hundred} {this.props.values.gender === "male" ? "men" : "women"} in their {JSON.stringify(this.props.values.age).replace(/['"]+/g, '')}'s successfully reach their
                        target weight
                    </div>
                    </div>
                    <div className="tutorial-quiz__section">
                    <img 
                        className="centering-margin" 
                        src={!(this.state.reversed === true) ? Chart2 : Chart3}
                        srcSet={!(this.state.reversed === true) ? Chart2x2 : Chart3x2 + " 2x"}
                        alt=""
                        alt=""
                    />
                    </div>
                    <div className="tutorial-quiz__section">
                    <div className="tutorial-connecting" data-direct-path="step-15.html">
                        <div className="tutorial-connecting__title">
                        Connecting to database…
                        </div>
                        <div className="tutorial-connecting__title tutorial-connecting__title--next">
                        Preparing results...
                        </div>
                        
                        <div className="tutorial-connecting__container">
                            
                        <div className="tutorial-connecting__fill"></div>
                        <Line percent={percent} strokeWidth="1" strokeColor="#30cd9a" />
                        <div className="tutorial-connecting__text">
                            <span className="tutorial-connecting__number">{percent}</span>
                            <span className="tutorial-connecting__percent">%</span>
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
                </div>
            </div>
        );
    }
};
