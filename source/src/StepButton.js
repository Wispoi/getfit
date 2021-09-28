import React from "react";

export const StepButton = props => {
  const { step, values } = props;
  switch (step) {
    case 1:
      return (
        <>
          <button
            variant="contained"
            color="primary"
            type="submit"
            className={"tutorial-quiz__button " + (!(values.idealWeight) ? 'tutorial-quiz__button--disabled' : '')}
          >
            Continue
          </button>
        </>
      );
      case 2:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"tutorial-quiz__button " + (!(values.currentWeight) ? 'tutorial-quiz__button--disabled' : '')}
            >
              Continue
            </button>
          </>
        );      
      case 3:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button tutorial-quiz__button--hidden"
            >
              Continue
            </button>
          </>
        );  
      case 4:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Submit
            </button>
          </>
        );  
      case 5:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Got it!
            </button>
          </>
        ); 
      case 6:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Got it!
            </button>
          </>
        );  
      case 7:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Got it!
            </button>
          </>
        ); 
      case 8:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Got it!
            </button>
          </>
        );       
      case 10:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"tutorial-quiz__button " + ((values.risks.length === 0)? 'tutorial-quiz__button--disabled' : '')}
            >
              Continue
            </button>
          </>
        );  
      case 15:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"tutorial-quiz__button " + (!(values.email)? 'tutorial-quiz__button--disabled' : '')}
            >
              See my results
            </button>
          </>
        );  
      case 16:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 17:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Continue
            </button>
          </>
        );     
      case 18:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 19:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Continue
            </button>
          </>
        );   
      case 20:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 21:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Continue
            </button>
          </>
        );  
      case 22:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 23:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Continue
            </button>
          </>
        );    
      case 24:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 25:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Set my first goal
            </button>
          </>
        );    
      case 26:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Claim my plan
            </button>
          </>
        );  
      case 27:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="tutorial-quiz__button"
            >
              Continue
            </button>
          </>
        );  
      case 28:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"tutorial-quiz__button " + (!(values.email) || !(values.givenName)? 'tutorial-quiz__button--disabled' : '')}
            >
              Continue
            </button>
          </>
        );  
      case 29:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"tutorial-quiz__button " + (!(values.email) || !(values.givenName)? 'tutorial-quiz__button--disabled' : '')}
            >
              Continue
            </button>
          </>
        );                                                                    
    default:
      return <></>;
  }
};
