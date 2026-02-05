import React from "react";
import Plan from "./Plan";
import Arcade from "../../assets/imges/icon-arcade.svg";
import Advanced from "../../assets/imges/icon-advanced.svg";
import Pro from "../../assets/imges/icon-pro.svg";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "./features/user";

const PlanStep = () => {
  const [age, setAge] = useState('');
  const [showSchool, setShowSchool] = useState(false);
  const [showHighSchool, setShowHighSchool] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (age === 'under 12 months') {
      setShowSchool(true);
      setShowHighSchool(false);
    } else if (age === 'under 18 years') {
      setShowSchool(false);
      setShowHighSchool(true);
    } else {
      setShowSchool(false);
      setShowHighSchool(false);
    }
  }, [age]);


  return (
    <div className="info">
      <h2>Address</h2>
      <p>Please provide your address, postcode and other information.</p>
      <form className="form" autoComplete="on">



        <div className="fields">
          <div className="dflex">
            <label>Current Address
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Civic Hall Calverley Street Leeds"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Postcode</label>
          </div>
          <input
            type="text"
            placeholder="e.g. LS1 1UR"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Village, town or city of birth
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. London"
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Country of birth
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. England"
          />
        </div>
        
      

        <div className="fields">
          <div className="dflex">
            <label>Age</label>
          </div>
          <select name="sex" required onChange={handleChange}>
            <option value="">Select Age</option>
            <option value="Adult">Adult</option>
            <option value="under 18 years">under 18 years</option>
            <option value="under 12 months">under 12 months</option>
          </select>
        </div>

        {showSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Where was the mother living when the baby was born?</label>
            </div>
            <input type="text" placeholder="e.g. London" />
          </div>

        )}
        {showSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Where were they born?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >England</option>
              <option >
                Northern Ireland</option>
              <option >
                Wales
              </option>
              <option>
                Isle of Man
              </option>
              <option> Scotland
              </option>
              <option>Outside the UK</option>
            </select>
          </div>

        )}

        {showHighSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Do you attend any of the following?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >School
              </option>
              <option >
                Nursery
              </option>
              <option >
                Home school

              </option>
              <option>
                None of these
              </option>

            </select>
          </div>
        )}
        {showHighSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Are any of these involved in your care?
              </label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >Hospital specialist

              </option>
              <option >
                Health worker

              </option>
              <option >
                Social worker

              </option>
              <option>
                None of these

              </option>

            </select>
          </div>
        )}
        {showHighSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Have you had all your routine vaccinations?
              </label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >Yes
              </option>
              <option >
                No

              </option>
              <option >
                Don't Know

              </option>


            </select>
          </div>
        )}
        {showHighSchool && (
          <div className="fields">
            <div className="dflex">
              <label>Did you get your routine vaccinations in the UK?

              </label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >Yes
              </option>
              <option >
                No

              </option>
              <option >
                Don't Know

              </option>


            </select>
          </div>
        )}

      </form>

    </div>
  );
};

export default PlanStep;
