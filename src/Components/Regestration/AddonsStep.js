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
  const [white, setWhite] = useState(false);
  const [mixed, setMixed] = useState(false);
  const [asian, setAsian] = useState(false);
  const [black, setBlack] = useState(false);
  const [other, setOther] = useState(false);



  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (age === 'White') {
      setWhite(true);
      setMixed(false);
      setAsian(false);
      setBlack(false);
      setOther(false);
    } else if (age === 'Mixed') {
      setWhite(false);
      setMixed(true);
      setAsian(false);
      setBlack(false);
      setOther(false);
    } else if (age === 'Asian') {
      setWhite(false);
      setMixed(false);
      setAsian(true);
      setBlack(false);
      setOther(false);
    } else if (age === 'Black') {
      setWhite(false);
      setMixed(false);
      setAsian(false);
      setBlack(true);
      setOther(false);
    } else if (age === 'Other') {
      setWhite(false);
      setMixed(false);
      setAsian(false);
      setBlack(false);
      setOther(true);
    } else {
      setWhite(false);
      setMixed(false);
      setAsian(false);
      setBlack(false);
      setOther(false);
    }
  }, [age]);


  return (
    <div className="info">
      <h2>Additional information</h2>
      <p>Please provide the necessary information.</p>
      <form className="form" autoComplete="on">
        <div className="fields">
          <div className="dflex">
            <label>What is your ethnic group?</label>
          </div>
          <select name="sex" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="White">White</option>
            <option value="Mixed">Mixed or multiple ethnic groups</option>
            <option value="Asian">Asian or Asian British</option>
            <option value="Black">Black/African/Caribbean/British</option>
            <option value="Other">Other ethnic group</option>
          </select>
        </div>

        {white && (
          <div className="fields">
            <div className="dflex">
              <label>Ethnic group or background?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >English, Welsh, Scottish, Northern Irish or British</option>
              <option >
                Irish</option>
              <option >
                Gypsy or Irish Traveller
              </option>
            </select>
          </div>

        )}
        {mixed && (
          <div className="fields">
            <div className="dflex">
              <label>Ethnic group or background?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >White and Black Caribbean
              </option>
              <option >
                White and Black African
              </option>
              <option >
                White and Asian

              </option>
            </select>
          </div>

        )}

        {asian && (
          <div className="fields">
            <div className="dflex">
              <label>Ethnic group or background?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >Indian
              </option>
              <option >
                Pakistani
              </option>
              <option >
                Bangladeshi


              </option>
              <option >
                Chinese

              </option>
            </select>
          </div>
        )}
        {black && (
          <div className="fields">
            <div className="dflex">
              <label>Ethnic group or background?</label>
            </div>
            <select name="sex" required>
              <option >Select</option>
              <option >African
              </option>
              <option >
                Caribbean
              </option>
            </select>
          </div>
        )}
        {other && (
          <div className="fields">
          <div className="dflex">
            <label>Ethnic group or background?
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Arab"
          />
        </div>
        )}


      </form>

    </div>
  );
};

export default PlanStep;
