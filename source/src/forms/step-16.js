import React from "react";
import { StepButton } from "../StepButton";
import ChartHugeSm2x from '../images/chart-huge-sm@2x.png';
import ChartHugeSm from '../images/chart-huge-sm.png';
import ChartHugeSmReverse2x from '../images/chart-huge-sm@2x-reversed.png';
import ChartHugeSmReverse from '../images/chart-huge-sm-reversed.png';
import MemberSm2x from '../images/tmp/member-sm@2x.png';
import MemberSm from '../images/tmp/member-sm.png';
import ReviewsHead2x from '../images/reviews-head@2x.png';
import ReviewsHead from '../images/reviews-head.png';
import FeaturesRatingHuge2x from '../images/features-landing-rating-huge@2x.png';
import FeaturesRatingHuge from '../images/features-landing-rating-huge.png';
import FeaturesRatingSmall2x from '../images/features-landing-rating-small@2x.png';
import FeaturesRatingSmall from '../images/features-landing-rating-small.png';

import Slider from "react-slick";
import $ from 'jquery';
const options = { month: 'long', day: 'numeric' };
export class Step16 extends React.Component {
    constructor() {
        super();
        this.state = {
          percent: 0,
          date: new Date().toLocaleString('en-EN', options),
          dateIncrease: '',
          newDate: '',
          reversed: false
        };
    }     
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.compareWeight();
        this.reverseChart();
    }  

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        if ($('.tutorial-quiz__section--sticked').length > 0) {
            if(($(window).scrollTop() >= $('.tutorial-result__content').offset().top + 100)){
                $('.tutorial-quiz__section--sticked').addClass('tutorial-active');
            }else{
                $('.tutorial-quiz__section--sticked').removeClass('tutorial-active');
            }
          }
    }
    compareWeight() {
        const idealWeight = JSON.stringify(this.props.values.idealWeight).replace(/['"]+/g, '');
        const currentWeight = JSON.stringify(this.props.values.currentWeight).replace(/['"]+/g, '');
        if (this.props.values.measureSystem === 'imperial') {
            if (Math.abs(idealWeight - currentWeight) <= 22) {
                this.setState({ dateIncrease: 30 })
                return;
            } else if (Math.abs(idealWeight - currentWeight) > 22 && Math.abs(idealWeight - currentWeight) <= 55){
                this.setState({ dateIncrease: 90 })
                return;
            } else {
                this.setState({ dateIncrease: 180 })
                return;            
            }
        } else {
            if (Math.abs(idealWeight - currentWeight) <= 10) {
                this.setState({ dateIncrease: 30 })
                return;
            } else if (Math.abs(idealWeight - currentWeight) > 10 && Math.abs(idealWeight - currentWeight) <= 25){
                this.setState({ dateIncrease: 90 })
                return;
            } else {
                this.setState({ dateIncrease: 180 })
                return;            
            }
        }

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
        const settings = {
            arrows: false,
            infinite: true,
            dots: false,
            adaptiveHeight: false,       
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true,
            autoplaySpeed: 3000,
          };        
          
        return (
            <div className="tutorial-quiz__fullwidth">
            <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
                <div className="tutorial-quiz__head tutorial-quiz__head--highlight">
                <div className="tutorial-quiz__title">
                    The last {!(this.state.reversed === true) ? 'weight loss' : 'weight gain'} program you’ll ever need
                </div>
                </div>
                <div className="tutorial-quiz__section tutorial-quiz__section--top">
                <div className="tutorial-quiz__title">
                    Based on your answers, you’ll be
                </div>
                <div className="tutorial-quiz__accent tutorial-quiz__accent--data">
                    {JSON.stringify(this.props.values.idealWeight).replace(/['"]+/g, '')} {((JSON.stringify(this.props.values.measureSystem).replace(/['"]+/g, '') === "metric") ? 'kgs' : 'lbs')} by {new Date(Date.now() + this.state.dateIncrease * 24 * 60 * 60 * 1000).toLocaleString('en-EN', options)}
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
                        <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>
                        <div className="tutorial-members">
                            <Slider {...settings} className="tutorial-members__slider js-slick-slider">
                                <div className="tutorial-members__slide">
                                    <div className="tutorial-members__item">
                                        <div className="tutorial-members__image">
                                        <img
                                            src={MemberSm}
                                            srcSet={MemberSm2x + " 2x"}
                                            alt=""
                                        />
                                        </div>
                                        <div className="tutorial-members__text">
                                        <p>
                                            «GetFit fits into my lifestyle perfectly. I can turn to
                                            this app day or night and they’re there for me»
                                        </p>
                                        </div>
                                        <div className="tutorial-members__note">
                                        Isabel Chambers
                                        </div>
                                    </div>
                                </div>
                                <div className="tutorial-members__slide">
                                    <div className="tutorial-members__item">
                                        <div className="tutorial-members__image">
                                        <img
                                            src={MemberSm}
                                            srcSet={MemberSm2x + " 2x"}
                                            alt=""
                                        />
                                        </div>
                                        <div className="tutorial-members__text">
                                        <p>
                                            «GetFit fits into my lifestyle perfectly. I can turn to
                                            this app day or night and they’re there for me»
                                        </p>
                                        </div>
                                        <div className="tutorial-members__note">
                                        Isabel Chambers
                                        </div>
                                    </div>
                                </div>
                                <div className="tutorial-members__slide">
                                    <div className="tutorial-members__item">
                                        <div className="tutorial-members__image">
                                        <img
                                            src={MemberSm}
                                            srcSet={MemberSm2x + " 2x"}
                                            alt=""
                                        />
                                        </div>
                                        <div className="tutorial-members__text">
                                        <p>
                                            «GetFit fits into my lifestyle perfectly. I can turn to
                                            this app day or night and they’re there for me»
                                        </p>
                                        </div>
                                        <div className="tutorial-members__note">
                                        Isabel Chambers
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tutorial-quiz__section tutorial-quiz__section--reviews">
                <img
                    className="centering-margin"
                    src={ReviewsHead}
                    srcSet={ReviewsHead2x + " 2x"}
                    alt=""
                />
                <div className="tutorial-quiz__heading">
                    <div className="tutorial-quiz__title tutorial-quiz__title--main">
                    Join millions of happy users
                    </div>
                    <div className="tutorial-quiz__image">
                    <img
                        src={FeaturesRatingHuge}
                        srcSet={FeaturesRatingHuge2x + " 2x"}
                        alt=""
                    />
                    </div>
                    <div className="tutorial-quiz__note">more than 10k reviews</div>
                </div>
                <div className="tutorial-comment">
                    <div className="parts-row parts-justify">
                    <div className="col">
                        <div className="tutorial-comment__title">Diana J.</div>
                    </div>
                    <div className="col">
                        <img
                        src={FeaturesRatingSmall}
                        srcSet={FeaturesRatingSmall2x + " 2x"}
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="tutorial-comment__text">
                    <p>
                        Great app!!! Trully inspiring. GetFit has built exercise into my
                        lifestyle. I love the sessions are short and always different!
                    </p>
                    </div>
                </div>
                <div className="tutorial-comment">
                    <div className="parts-row parts-justify">
                    <div className="col">
                        <div className="tutorial-comment__title">David S.</div>
                    </div>
                    <div className="col">
                        <img
                        src={FeaturesRatingSmall}
                        srcSet={FeaturesRatingSmall2x + " 2x"}
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="tutorial-comment__text">
                    <p>The app is amazing!!! It will definitrly push you to the limit!</p>
                    </div>
                </div>
                <div className="tutorial-comment">
                    <div className="parts-row parts-justify">
                    <div className="col">
                        <div className="tutorial-comment__title">Emilu C.</div>
                    </div>
                    <div className="col">
                        <img
                        src={FeaturesRatingSmall}
                        srcSet={FeaturesRatingSmall2x + " 2x"}
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="tutorial-comment__text">
                    <p>
                        Just finished my first month and i already feel the change. I love
                        the variety in recipes! And, for the first time, i feel confident
                        with my bofy. I couldn’t be happier!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="tutorial-quiz__section tutorial-quiz__section--sticked">
                <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values} ref={(ref) => this.scrollIcon = ref}/>
            </div>
        </div>
        );
    }
};
