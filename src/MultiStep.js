import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12, Step13, Step14, Step15, Step16, Step17, Step18, Step19, Step20, Step21, Step22, Step23, Step24, Step25, Step26, Step27, Step28, Step29, Step30, Step31, Step32, Step33 } from './forms/index';
import { FormFirstStep } from "./forms/FormFirstStep";
import { FormSuccess } from "./forms/FormSuccess";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const renderStep = (step, values, errors, touched) => {
  switch (step) {
    case 1:
      return <Step1 errors={errors} touched={touched} step={step} values={values}/>;
    case 2:
      return <Step2 errors={errors} touched={touched} step={step} values={values}/>;
    case 3:
      return <Step3 errors={errors} touched={touched} step={step} values={values}/>;    
    case 4:
      return <Step4 errors={errors} touched={touched} step={step} values={values}/>;     
    case 5:
      return <Step5 errors={errors} touched={touched} step={step} values={values}/>;
    case 6:
      return <Step6 errors={errors} touched={touched} step={step} values={values}/>;      
    case 7:
      return <Step7 errors={errors} touched={touched} step={step} values={values}/>;    
    case 8:
      return <Step8 step={step}/>; 
    case 9:
      return <Step9 errors={errors} touched={touched} step={step} values={values}/>;    
    case 10:
      return <Step10 errors={errors} touched={touched} step={step} values={values}/>;
    case 11:
      return <Step11 errors={errors} touched={touched} step={step} values={values}/>;    
    case 12:
      return <Step12 errors={errors} touched={touched} step={step} values={values}/>; 
    case 13:
      return <Step13 errors={errors} touched={touched} step={step} values={values}/>;   
    case 14:
      return <Step14 errors={errors} touched={touched} step={step} values={values}/>;         
    case 15:
      return <Step15 errors={errors} touched={touched} step={step} values={values}/>; 
    case 16:
      return <Step16 errors={errors} touched={touched} step={step} values={values}/>;     
    case 17:
      return <Step17 step={step}/>;  
    case 18:
      return <Step18 errors={errors} touched={touched} step={step} values={values}/>;    
    case 19:
      return <Step19 errors={errors} touched={touched} step={step} values={values}/>;
    case 20:
      return <Step20 errors={errors} touched={touched} step={step} values={values}/>;    
    case 21:
      return <Step21 errors={errors} touched={touched} step={step} values={values}/>; 
    case 22:
      return <Step22 errors={errors} touched={touched} step={step} values={values}/>;   
    case 23:
      return <Step23 errors={errors} touched={touched} step={step} values={values}/>;         
    case 24:
      return <Step24 errors={errors} touched={touched} step={step} values={values}/>; 
    case 25:
      return <Step25 errors={errors} touched={touched} step={step} values={values}/>;    
    case 26:
      return <Step26 errors={errors} touched={touched} step={step} values={values}/>; 
    case 27:
      return <Step27 errors={errors} touched={touched} step={step} values={values}/>;        
    case 28:
      return <Step28 errors={errors} touched={touched} step={step} values={values}/>;      
    case 29:
      return <Step29 errors={errors} touched={touched} step={step} values={values}/>; 
    case 30:
      return <Step30 errors={errors} touched={touched} step={step} values={values}/>;        
    case 31:
      return <Step31 errors={errors} touched={touched} step={step} values={values}/>;    
    case 32:
      return <Step32 errors={errors} touched={touched} step={step} values={values}/>;      
    case 33:
      return <Step33 errors={errors} touched={touched} step={step} values={values}/>;                                                                              
    case 34:
      return <FormSuccess values={values} />;
    default:
      return <Step1 errors={errors} touched={touched} step={step} values={values}/>;
  }
};

export const MultiStep = () => {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const formData = {
    measureSystem: "metric",
    weightUnit: "kg",
    heightUnit: "cm",    
    idealWeight: "",
    currentHeight: "",
    currentHeightFt: "",
    currentHeightIn: "",
    currentWeight: "",
    gender: "",
    age: "",
    experience: "",
    focus: "",
    backIssues: "",
    risks: "",
    diabetes: "",
    antibiotic: "",
    liveArea: "",
    email: "",
    schedule: "",
    mealsPreparation: "",
    workoutTime: "",
    desiredSpeed: "",
    goal: "",
    trafficSource: "",
    givenName: "",
    heartOrDiabetesFamily: "",
    eatTheSameTime: "",
    seated: "",
    loggedIn: false,
    logginEmail: "test@gmail.com",
  };
  const handleSubmit = () => {
    setStep(step => step + 1);
    window.scrollTo(0, 0)
  };

  const validate = values => {
    const errors = {};
    return errors;
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched  }) => (
        <div className="tutorial-quiz">
            <Form className={classes.form}>
                {renderStep(step, values, errors, touched )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
