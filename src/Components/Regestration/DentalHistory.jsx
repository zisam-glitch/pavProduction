import React, { useState } from "react";

const DentalHistoryStep = () => {
  const [lastCheckup, setLastCheckup] = useState("");
  const [pastProblems, setPastProblems] = useState("");
  const [attendance, setAttendance] = useState("");
  const [dentalPain, setDentalPain] = useState("");
  const [gumBleeding, setGumBleeding] = useState("");
  const [looseTeeth, setLooseTeeth] = useState("");
  const [grinding, setGrinding] = useState("");
  const [jawJoint, setJawJoint] = useState("");
  const [brushing, setBrushing] = useState("");
  const [fluoride, setFluoride] = useState(false);
  const [mouthwash, setMouthwash] = useState(false);
  const [floss, setFloss] = useState(false);
  const [sweetTooth, setSweetTooth] = useState("");
  const [appearance, setAppearance] = useState("");
  const [appearanceChange, setAppearanceChange] = useState("");
  const [cosmeticOptions, setCosmeticOptions] = useState({
    whitening: false,
    orthodontics: false,
    veneers: false,
    implants: false,
  });
  const [anxiety, setAnxiety] = useState("");
  const [anxietyLevel, setAnxietyLevel] = useState("");
  const [badExperience, setBadExperience] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState({
    translator: false,
    wheelchair: false,
    extraTime: false,
  });

  return (
    <div className="info">
      <h2>Dental History</h2>
      <p>Please provide your dental care and oral health information.</p>

      <form className="form">

        {/* Dental Care */}
        <div className="fields">
          <div className="dflex">
            <label>When was your last dental check-up?</label>
          </div>
          <div className="options">
            <label>
              <input type="radio" name="lastCheckup" value="6m" checked={lastCheckup === "6m"} onChange={(e) => setLastCheckup(e.target.value)} />
              <span>Within 6 months</span>
            </label>
            <label>
              <input type="radio" name="lastCheckup" value="12m" checked={lastCheckup === "12m"} onChange={(e) => setLastCheckup(e.target.value)} />
              <span>6–12 months</span>
            </label>
            <label>
              <input type="radio" name="lastCheckup" value="1y" checked={lastCheckup === "1y"} onChange={(e) => setLastCheckup(e.target.value)} />
              <span>Over 1 year ago</span>
            </label>
          </div>
          {lastCheckup && <input type="text" placeholder="Details" />}
        </div>

        <div className="fields">
          <div className="dflex">
            <label>Have you ever had any problems with dental treatment in the past?</label>
          </div>
          <div className="options">
            <label>
              <input type="radio" name="pastProblems" value="no" checked={pastProblems === "no"} onChange={(e) => setPastProblems(e.target.value)} />
              <span>No</span>
            </label>
            <label>
              <input type="radio" name="pastProblems" value="yes" checked={pastProblems === "yes"} onChange={(e) => setPastProblems(e.target.value)} />
              <span>Yes</span>
            </label>
          </div>
          {pastProblems === "yes" && <input type="text" placeholder="Please describe" />}
        </div>

        <div className="fields">
          <div className="dflex">
            <label>Do you usually attend the dentist:</label>
          </div>
          <div className="options">
            <label>
              <input type="radio" name="attendance" value="regular" checked={attendance === "regular"} onChange={(e) => setAttendance(e.target.value)} />
              <span>Regularly</span>
            </label>
            <label>
              <input type="radio" name="attendance" value="pain" checked={attendance === "pain"} onChange={(e) => setAttendance(e.target.value)} />
              <span>Only when in pain</span>
            </label>
          </div>
        </div>

        {/* Dental Health */}
        <div className="fields">
          <div className="dflex">
            <label>Do you currently have any dental pain or discomfort?</label>
          </div>
          <div className="options">
            <label>
              <input type="radio" name="dentalPain" value="no" checked={dentalPain === "no"} onChange={(e) => setDentalPain(e.target.value)} />
              <span>No</span>
            </label>
            <label>
              <input type="radio" name="dentalPain" value="yes" checked={dentalPain === "yes"} onChange={(e) => setDentalPain(e.target.value)} />
              <span>Yes</span>
            </label>
          </div>
          {dentalPain === "yes" && <input type="text" placeholder="Please provide details" />}
        </div>

        {/* Gum bleeding */}
        <div className="fields">
          <label>Do your gums ever bleed when brushing or eating?</label>
          <div className="options">
            <label><input type="radio" name="gumBleeding" value="no" checked={gumBleeding === "no"} onChange={(e) => setGumBleeding(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="gumBleeding" value="yes" checked={gumBleeding === "yes"} onChange={(e) => setGumBleeding(e.target.value)} /> <span>Yes</span></label>
          </div>
        </div>

        {/* Loose Teeth */}
        <div className="fields">
          <label>Have you noticed loose teeth, drifting teeth, or gaps appearing?</label>
          <div className="options">
            <label><input type="radio" name="looseTeeth" value="no" checked={looseTeeth === "no"} onChange={(e) => setLooseTeeth(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="looseTeeth" value="yes" checked={looseTeeth === "yes"} onChange={(e) => setLooseTeeth(e.target.value)} /> <span>Yes</span></label>
          </div>
        </div>

        {/* Grinding */}
        <div className="fields">
          <label>Do you clench or grind your teeth?</label>
          <div className="options">
            <label><input type="radio" name="grinding" value="no" checked={grinding === "no"} onChange={(e) => setGrinding(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="grinding" value="yes" checked={grinding === "yes"} onChange={(e) => setGrinding(e.target.value)} /> <span>Yes</span></label>
          </div>
        </div>

        {/* Jaw Joint */}
        <div className="fields">
          <label>Do you have any problems with your jaw joint (clicking, locking, pain)?</label>
          <div className="options">
            <label><input type="radio" name="jawJoint" value="no" checked={jawJoint === "no"} onChange={(e) => setJawJoint(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="jawJoint" value="yes" checked={jawJoint === "yes"} onChange={(e) => setJawJoint(e.target.value)} /> <span>Yes</span></label>
          </div>
        </div>

        {/* Oral Habits */}
        <div className="fields">
          <div className="dflex">
            <label>How often do you brush your teeth each day?</label>
          </div>
          <div className="options">
            <label><input type="radio" name="brushing" value="once" checked={brushing === "once"} onChange={(e) => setBrushing(e.target.value)} /> <span>Once</span></label>
            <label><input type="radio" name="brushing" value="twice" checked={brushing === "twice"} onChange={(e) => setBrushing(e.target.value)} /> <span>Twice</span></label>
            <label><input type="radio" name="brushing" value="more" checked={brushing === "more"} onChange={(e) => setBrushing(e.target.value)} /> <span>More than twice</span></label>
          </div>
        </div>

        <div className="checkbox-group">
          <label className="custom-checkbox">
            <input type="checkbox" checked={fluoride} onChange={(e) => setFluoride(e.target.checked)} />
            <span className="checkmark"></span> Fluoride toothpaste
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={mouthwash} onChange={(e) => setMouthwash(e.target.checked)} />
            <span className="checkmark"></span> Mouthwash
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={floss} onChange={(e) => setFloss(e.target.checked)} />
            <span className="checkmark"></span> Dental floss / interdental brushes
          </label>
        </div>

        <div className="fields">
          <label>Do you have a sweet tooth / snack frequently on sugary foods/drinks?</label>
          <div className="options">
            <label><input type="radio" name="sweetTooth" value="no" checked={sweetTooth === "no"} onChange={(e) => setSweetTooth(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="sweetTooth" value="yes" checked={sweetTooth === "yes"} onChange={(e) => setSweetTooth(e.target.value)} /> <span>Yes</span></label>
          </div>
        </div>

        {/* Cosmetic Concerns */}
        <div className="fields">
          <label>Are you happy with the appearance of your teeth and smile?</label>
          <div className="options">
            <label><input type="radio" name="appearance" value="yes" checked={appearance === "yes"} onChange={(e) => setAppearance(e.target.value)} /> <span>Yes</span></label>
            <label><input type="radio" name="appearance" value="no" checked={appearance === "no"} onChange={(e) => setAppearance(e.target.value)} /> <span>No</span></label>
          </div>
          {appearance === "no" && <input type="text" placeholder="What would you like to change?" />}
        </div>

        <div className="checkbox-group">
          <label className="custom-checkbox">
            <input type="checkbox" checked={cosmeticOptions.whitening} onChange={(e) => setCosmeticOptions({ ...cosmeticOptions, whitening: e.target.checked })} />
            <span className="checkmark"></span> Teeth whitening
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={cosmeticOptions.orthodontics} onChange={(e) => setCosmeticOptions({ ...cosmeticOptions, orthodontics: e.target.checked })} />
            <span className="checkmark"></span> Orthodontics (braces/invisible aligners)
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={cosmeticOptions.veneers} onChange={(e) => setCosmeticOptions({ ...cosmeticOptions, veneers: e.target.checked })} />
            <span className="checkmark"></span> Cosmetic fillings / veneers
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={cosmeticOptions.implants} onChange={(e) => setCosmeticOptions({ ...cosmeticOptions, implants: e.target.checked })} />
            <span className="checkmark"></span> Implants / dentures
          </label>
        </div>

        {/* Dental Anxiety */}
        <div className="fields">
          <label>Do you feel nervous or anxious about dental treatment?</label>
          <div className="options">
            <label><input type="radio" name="anxiety" value="no" checked={anxiety === "no"} onChange={(e) => setAnxiety(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="anxiety" value="yes" checked={anxiety === "yes"} onChange={(e) => setAnxiety(e.target.value)} /> <span>Yes</span></label>
          </div>
          {anxiety === "yes" && (
            <div className="options">
              <label><input type="radio" name="anxietyLevel" value="mild" checked={anxietyLevel === "mild"} onChange={(e) => setAnxietyLevel(e.target.value)} /> <span>Mild</span></label>
              <label><input type="radio" name="anxietyLevel" value="moderate" checked={anxietyLevel === "moderate"} onChange={(e) => setAnxietyLevel(e.target.value)} /> <span>Moderate</span></label>
              <label><input type="radio" name="anxietyLevel" value="severe" checked={anxietyLevel === "severe"} onChange={(e) => setAnxietyLevel(e.target.value)} /> <span>Severe</span></label>
            </div>
          )}
        </div>

        <div className="fields">
          <label>Have you ever had a bad dental experience?</label>
          <div className="options">
            <label><input type="radio" name="badExperience" value="no" checked={badExperience === "no"} onChange={(e) => setBadExperience(e.target.value)} /> <span>No</span></label>
            <label><input type="radio" name="badExperience" value="yes" checked={badExperience === "yes"} onChange={(e) => setBadExperience(e.target.value)} /> <span>Yes</span></label>
          </div>
          {badExperience === "yes" && <input type="text" placeholder="Please explain" />}
        </div>

        {/* Special Considerations */}
        <div className="checkbox-group">
          <label className="custom-checkbox">
            <input type="checkbox" checked={specialNeeds.translator} onChange={(e) => setSpecialNeeds({ ...specialNeeds, translator: e.target.checked })} />
            <span className="checkmark"></span> Translator / Language support
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={specialNeeds.wheelchair} onChange={(e) => setSpecialNeeds({ ...specialNeeds, wheelchair: e.target.checked })} />
            <span className="checkmark"></span> Wheelchair access / Assisted mobility
          </label>
          <label className="custom-checkbox">
            <input type="checkbox" checked={specialNeeds.extraTime} onChange={(e) => setSpecialNeeds({ ...specialNeeds, extraTime: e.target.checked })} />
            <span className="checkmark"></span> Extra time for appointments
          </label>
        </div>
      </form>
    </div>
  );
};

export default DentalHistoryStep;