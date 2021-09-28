import React from "react";
import {FieldArray} from "formik";
import { StepButton } from "../StepButton";

const categories = [
    { id: "0", name: "Diabetes" },
    { id: "1", name: "Heart disease or stroke" },
    { id: "2", name: "High blood pressure" },
    { id: "3", name: "Osteoarthritis" },
    { id: "4", name: "Depression" },
    { id: "5", name: "Kidney disease" },
    { id: "6", name: "None of this" }  
  ];

export const Step10 = formikProps => {
  const { errors, step, values} = formikProps;

  return (
    <div className="tutorial-quiz__container tutorial-quiz__container--visible">
        <div className="tutorial-quiz__head">
            <div className="tutorial-quiz__title tutorial-quiz__title--main">
            Demographic Profile
            </div>
            <div className="tutorial-progressbar">
            <div className="tutorial-progressbar__line"></div>
            <div className="tutorial-progressbar__line tutorial-progressbar__line--progress forty-percent"></div>
            <div className="tutorial-progressbar__container">
                <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
                <div className="tutorial-progressbar__num">1</div>
                </div>
                <div className="tutorial-progressbar__item tutorial-progressbar__item--current">
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
                <div className="tutorial-quiz__title">Are you at risk of any of the following?</div>
            </div>
            <FieldArray
                name="risks"
                render={arrayHelpers => (
                <div>
                    {categories.map(category => (
                    <label className="tutorial-quiz__label tutorial-quiz__label--checkbox" key={category.id}>
                        <input
                            name="risks"
                            type="checkbox"
                            value={category.name}
                            checked={values.risks.includes(category.name)}
                            onChange={e => {
                            if (e.target.checked) arrayHelpers.push(category.name);
                            else {
                                const idx = values.risks.indexOf(category.name);
                                arrayHelpers.remove(idx);
                            }
                            if (e.target.value  === "None of this") {
                                values.risks = []
                            }
                            if (!(e.target.value  === "None of this")) {
                                for(var i = values.risks.length - 1; i >= 0; i--) {
                                    if(values.risks[i] === "None of this") {
                                        values.risks.splice(i, 1);
                                    }
                                }
                            }                            
                            }}
                        />{" "}  
                        <span className="tutorial-quiz__text">{category.name}</span>
                        <span className="tutorial-quiz__icon">
                            <svg className="tutorial-icon" viewBox="0 0 16 12" id="ic-check-round" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M14.906.004a.995.995 0 00-.681.3L5.018 9.518 1.756 6.253A.992.992 0 10.355 7.655l3.962 3.966a.99.99 0 001.401 0l9.908-9.915a.992.992 0 00-.72-1.702z"
                                />
                            </svg>
                        </span>                      
                    </label>
                    ))}
                </div>
                )}
            />
            <div className="tutorial-quiz__section">
                <StepButton step={step} errors={errors} values={values}/>
            </div>
            </div>
        </div>
    </div>
  );
};
