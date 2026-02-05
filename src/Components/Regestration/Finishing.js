import React, { useState } from "react";

const PlanStep = () => {
  const [smoke, setSmoke] = useState("");
  const [vape, setVape] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [drugs, setDrugs] = useState("");

  return (
    <div className="info">
      <h2>Lifestyle Information</h2>
      <p>Please provide lifestyle details.</p>

      <form className="form">
        {/* Smoking */}
        <div className="fields">
          <div className="dflex">
            <label>Do you smoke?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="smoke"
                value="no"
                checked={smoke === "no"}
                onChange={(e) => setSmoke(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="smoke"
                value="yes"
                checked={smoke === "yes"}
                onChange={(e) => setSmoke(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>

          {smoke === "yes" && (
            <>
              <input type="text" placeholder="How many per day?" />
              <input type="text" placeholder="For how many years?" />
            </>
          )}
        </div>

        {/* Vaping */}
        <div className="fields">
          <div className="dflex">
            <label>Do you vape (use e-cigarettes)?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="vape"
                value="no"
                checked={vape === "no"}
                onChange={(e) => setVape(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="vape"
                value="yes"
                checked={vape === "yes"}
                onChange={(e) => setVape(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>

          {vape === "yes" && (
            <>
              <input type="text" placeholder="Type (nicotine / non-nicotine / other)" />
              <input type="text" placeholder="How often?" />
            </>
          )}
        </div>

        {/* Alcohol */}
        <div className="fields">
          <div className="dflex">
            <label>Do you drink alcohol?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="alcohol"
                value="no"
                checked={alcohol === "no"}
                onChange={(e) => setAlcohol(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="alcohol"
                value="yes"
                checked={alcohol === "yes"}
                onChange={(e) => setAlcohol(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>

          {alcohol === "yes" && (
            <input type="text" placeholder="How often / units per week?" />
          )}
        </div>

        {/* Drugs */}
        <div className="fields">
          <div className="dflex">
            <label>Do you use recreational or non-prescribed drugs?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="drugs"
                value="no"
                checked={drugs === "no"}
                onChange={(e) => setDrugs(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="drugs"
                value="yes"
                checked={drugs === "yes"}
                onChange={(e) => setDrugs(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>

          {drugs === "yes" && (
            <>
              <input type="text" placeholder="Please specify (e.g. cannabis, cocaine)" />
              <input type="text" placeholder="How often?" />
            </>
          )}
        </div>

        {/* Height & Weight */}
        <div className="fields">
          <div className="dflex">
            <label>What is your height?</label>
          </div>
          <input type="text" placeholder="e.g. 173 cm / 5’8”" />
        </div>

        <div className="fields">
          <div className="dflex">
            <label>What is your weight?</label>
          </div>
          <input type="text" placeholder="e.g. 70 kg / 154 lbs" />
        </div>
      </form>
    </div>
  );
};

export default PlanStep;