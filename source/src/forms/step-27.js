import React from "react";
import { Field } from "formik";

export class Step27 extends React.Component {
    handleClick = (e) => {
        setTimeout(() => {
            this.inputElement.click();
          }, 50);
      }      
    render() {
  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible tutorial-quiz__container--compact">
    <div className="tutorial-quiz__section">
      <div className="tutorial-quiz__title tutorial-quiz__title--left tutorial-quiz__title--lg">
        Where did you hear about us?
      </div>
      <Field
                    name="trafficSource"
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="0"
                            value="0"
                            checked={field.value === '0'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Youtube</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="1"
                            value="1"
                            name="trafficSource"
                            checked={field.value === '1'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Instagram</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="2"
                            value="2"
                            checked={field.value === '2'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Online Banner Ad</span>                     
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="3"
                            value="3"
                            name="trafficSource"
                            checked={field.value === '3'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Facebook</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="4"
                            value="4"
                            checked={field.value === '4'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Blog Post or Review on a Website</span>                     
                        </label>  
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="5"
                            value="5"
                            checked={field.value === '5'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Search engine (Google, Bing, etc.)</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="6"
                            value="6"
                            name="trafficSource"
                            checked={field.value === '6'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">AM/FM Radio</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="7"
                            value="7"
                            checked={field.value === '7'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Podcast</span>                     
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="8"
                            value="8"
                            name="trafficSource"
                            checked={field.value === '8'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Direct mail or Package Insert</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="9"
                            value="9"
                            checked={field.value === '9'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">TikTok</span>                     
                        </label>    
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="10"
                            value="10"
                            checked={field.value === '10'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Someone's social media profile</span>                     
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="11"
                            value="11"
                            name="trafficSource"
                            checked={field.value === '11'}
                            type="radio"
                            onClick={this.handleClick}                          
                            />
                            <span className="tutorial-quiz__text">Friend or Family</span>                              
                        </label>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="12"
                            value="12"
                            checked={field.value === '12'}
                            name="trafficSource"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">Other</span>                     
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
  );
    }
};
