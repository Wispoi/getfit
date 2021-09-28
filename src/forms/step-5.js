import React from "react";
import { StepButton } from "../StepButton";
import Chart1x2 from '../images/chart-1@2x.png';
import Chart1 from '../images/chart-1.png';
import Chart2x2 from '../images/chart_2@2x.png';
import Chart2 from '../images/chart_2.png';

export class Step5 extends React.Component {
    constructor() {
        super();
        this.state = {
          reversed: false
        };
    }   
    componentDidMount(){
        this.reverseChart();
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
          
  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible ">
        <div className="tutorial-quiz__head">
        <div className="tutorial-quiz__title tutorial-quiz__title--main">
            Demographic Profile
        </div>
        <div className="tutorial-progressbar">
            <div className="tutorial-progressbar__line"></div>
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress twenty-five-percent"></div>
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
            <div className="tutorial-quiz__section">
            <div className="tutorial-quiz__title tutorial-quiz__title--left">
                Building healthier habits and taking a smarter approach ensure the
                results to last
            </div>
            </div>
            <div className="tutorial-quiz__section small-width">
            {<img
                className="centering-margin"
                src={!(this.state.reversed === true) ? Chart1 : Chart2}
                srcSet={!(this.state.reversed === true) ? Chart1x2 : Chart2x2 + " 2x"}
                alt=""
            />}
            <div className="tutorial-quiz__note tutorial-quiz__note--left tutorial-quiz__note--sm">
                <p>
                * 78% of GetFit users sustained {!(this.state.reversed === true) ? 'weight loss' : 'weight gain'} over 9 months in a
                2016 study
                </p>
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
