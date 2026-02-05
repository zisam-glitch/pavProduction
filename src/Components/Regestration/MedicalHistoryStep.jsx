import React, { useState } from "react";
 

const MedicalHistoryStep = () => {
  const [allergies, setAllergies] = useState("");
  const [bloodThinners, setBloodThinners] = useState("");
  const [bisphosphonates, setBisphosphonates] = useState("");
  const [radiotherapy, setRadiotherapy] = useState("");
  const [steroids, setSteroids] = useState("");
  const [hiv, setHiv] = useState("");
  const [hepatitis, setHepatitis] = useState("");
  const [otherInfectious, setOtherInfectious] = useState("");
  const [heartDisease, setHeartDisease] = useState(false);
  const [chestProblems, setChestProblems] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [epilepsy, setEpilepsy] = useState(false);
  const [mentalHealth, setMentalHealth] = useState(false);
  const [allergySkin, setAllergySkin] = useState(false);
  const [arthritis, setArthritis] = useState(false);
  const [digestive, setDigestive] = useState(false);
  const [kidney, setKidney] = useState(false);
  const [liver, setLiver] = useState(false);
  const [cancer, setCancer] = useState(false);
  const [bloodDisorders, setBloodDisorders] = useState(false);
  const [otherIllness, setOtherIllness] = useState(false);
  const [hospitalCare, setHospitalCare] = useState("");
  const [visionProblems, setVisionProblems] = useState("");
  const [hearingProblems, setHearingProblems] = useState("");
  const [learningDifficulties, setLearningDifficulties] = useState("");
  const [covidVaccinations, setCovidVaccinations] = useState("");
  const [accidents, setAccidents] = useState("");
const [pregnant, setPregnant] = useState("");
  const [wheelchair, setWheelchair] = useState("");

  return (
    <div className="info">
      <h2>Medical History</h2>
      <p>Please provide your complete medical history and current health information.</p>

      <form className="form">
        {/* Current Medications */}
        <div className="fields">
          <div className="dflex">
            <label>Please list all medications you currently take (pills, injections, or regular drugs)</label>
          </div>
          <input
            type="text"
            placeholder="e.g. Paracetamol 500mg twice daily, Insulin"
          />
        </div>

        {/* Allergies */}
        <div className="fields">
          <div className="dflex">
            <label>Are you allergic to any medications or substances?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="allergies"
                value="no"
                checked={allergies === "no"}
                onChange={(e) => setAllergies(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="allergies"
                value="yes"
                checked={allergies === "yes"}
                onChange={(e) => setAllergies(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {allergies === "yes" && (
            <input type="text" placeholder="Please specify allergies and reactions" />
          )}
        </div>

        {/* Blood Thinners */}
        <div className="fields">
          <div className="dflex">
            <label>Do you take blood thinners (e.g. Warfarin, Aspirin, Clopidogrel)?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="bloodThinners"
                value="no"
                checked={bloodThinners === "no"}
                onChange={(e) => setBloodThinners(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="bloodThinners"
                value="yes"
                checked={bloodThinners === "yes"}
                onChange={(e) => setBloodThinners(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {bloodThinners === "yes" && (
            <input type="text" placeholder="Which one(s)?" />
          )}
        </div>

        {/* Bisphosphonates */}
        <div className="fields">
          <div className="dflex">
            <label>Do you take bisphosphonates (for osteoporosis, cancer, or bone conditions)?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="bisphosphonates"
                value="no"
                checked={bisphosphonates === "no"}
                onChange={(e) => setBisphosphonates(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="bisphosphonates"
                value="yes"
                checked={bisphosphonates === "yes"}
                onChange={(e) => setBisphosphonates(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {bisphosphonates === "yes" && (
            <input type="text" placeholder="Which one(s)?" />
          )}
        </div>

        {/* Radiotherapy */}
        <div className="fields">
          <div className="dflex">
            <label>Have you had radiotherapy to the head, neck, or jaw?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="radiotherapy"
                value="no"
                checked={radiotherapy === "no"}
                onChange={(e) => setRadiotherapy(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="radiotherapy"
                value="yes"
                checked={radiotherapy === "yes"}
                onChange={(e) => setRadiotherapy(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {radiotherapy === "yes" && (
            <input type="text" placeholder="When/where?" />
          )}
        </div>

        {/* Steroids */}
        <div className="fields">
          <div className="dflex">
            <label>Have you taken steroids long-term?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="steroids"
                value="no"
                checked={steroids === "no"}
                onChange={(e) => setSteroids(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="steroids"
                value="yes"
                checked={steroids === "yes"}
                onChange={(e) => setSteroids(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {steroids === "yes" && (
            <input type="text" placeholder="What type & duration?" />
          )}
        </div>

        {/* HIV */}
        <div className="fields">
          <div className="dflex">
            <label>Have you ever been diagnosed with HIV/AIDS?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="hiv"
                value="no"
                checked={hiv === "no"}
                onChange={(e) => setHiv(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="hiv"
                value="yes"
                checked={hiv === "yes"}
                onChange={(e) => setHiv(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* Hepatitis */}
        <div className="fields">
          <div className="dflex">
            <label>Have you ever been diagnosed with Hepatitis B or C?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="hepatitis"
                value="no"
                checked={hepatitis === "no"}
                onChange={(e) => setHepatitis(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="hepatitis"
                value="yes"
                checked={hepatitis === "yes"}
                onChange={(e) => setHepatitis(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* Other Infectious */}
        <div className="fields">
          <div className="dflex">
            <label>Have you been diagnosed with any other infectious disease?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="otherInfectious"
                value="no"
                checked={otherInfectious === "no"}
                onChange={(e) => setOtherInfectious(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="otherInfectious"
                value="yes"
                checked={otherInfectious === "yes"}
                onChange={(e) => setOtherInfectious(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {otherInfectious === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>

        {/* Medical Conditions */}
        <div className="fields">
          <div className="dflex">
            <label>Please tick all medical conditions that apply to you:</label>
          </div>

          {/* Heart Disease */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={heartDisease}
                onChange={(e) => setHeartDisease(e.target.checked)}
              />
              <span className="checkmark"></span>
              Heart disease / Angina / Heart attack / Stroke / High blood pressure
            </label>
            {heartDisease && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Chest Problems */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={chestProblems}
                onChange={(e) => setChestProblems(e.target.checked)}
              />
              <span className="checkmark"></span>
              Chest problems (Asthma, Bronchitis, Tuberculosis, COPD, Chest pain)
            </label>
            {chestProblems && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Diabetes */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={diabetes}
                onChange={(e) => setDiabetes(e.target.checked)}
              />
              <span className="checkmark"></span>
              Diabetes
            </label>
            {diabetes && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Epilepsy */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={epilepsy}
                onChange={(e) => setEpilepsy(e.target.checked)}
              />
              <span className="checkmark"></span>
              Epilepsy / Fainting attacks / Migraine / Frequent headaches
            </label>
            {epilepsy && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Mental Health */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={mentalHealth}
                onChange={(e) => setMentalHealth(e.target.checked)}
              />
              <span className="checkmark"></span>
              Mental health conditions (Anxiety, Depression, Other)
            </label>
            {mentalHealth && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Allergy/Skin */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={allergySkin}
                onChange={(e) => setAllergySkin(e.target.checked)}
              />
              <span className="checkmark"></span>
              Allergies / Hayfever / Eczema / Psoriasis / Skin conditions
            </label>
            {allergySkin && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Arthritis */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={arthritis}
                onChange={(e) => setArthritis(e.target.checked)}
              />
              <span className="checkmark"></span>
              Arthritis / Back pain / Sciatica / Slipped disc
            </label>
            {arthritis && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Digestive */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={digestive}
                onChange={(e) => setDigestive(e.target.checked)}
              />
              <span className="checkmark"></span>
              Digestive issues (Ulcer, Indigestion, Hernia, Appetite disorder)
            </label>
            {digestive && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Kidney */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={kidney}
                onChange={(e) => setKidney(e.target.checked)}
              />
              <span className="checkmark"></span>
              Kidney disease
            </label>
            {kidney && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Liver */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={liver}
                onChange={(e) => setLiver(e.target.checked)}
              />
              <span className="checkmark"></span>
              Liver disease / Jaundice / Hepatitis
            </label>
            {liver && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Cancer */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={cancer}
                onChange={(e) => setCancer(e.target.checked)}
              />
              <span className="checkmark"></span>
              Cancer (Past or Present)
            </label>
            {cancer && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Blood Disorders */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={bloodDisorders}
                onChange={(e) => setBloodDisorders(e.target.checked)}
              />
              <span className="checkmark"></span>
              Blood disorders (Anaemia, Bleeding problems, Sickle cell, etc.)
            </label>
            {bloodDisorders && <input type="text" placeholder="Please provide details" />}
          </div>

          {/* Other Illness */}
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={otherIllness}
                onChange={(e) => setOtherIllness(e.target.checked)}
              />
              <span className="checkmark"></span>
              Any other serious illness not listed
            </label>
            {otherIllness && <input type="text" placeholder="Please provide details" />}
          </div>
        </div>

        {/* Hospital Care */}
        <div className="fields">
          <div className="dflex">
            <label>Are you currently under hospital care or investigation?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="hospitalCare"
                value="no"
                checked={hospitalCare === "no"}
                onChange={(e) => setHospitalCare(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="hospitalCare"
                value="yes"
                checked={hospitalCare === "yes"}
                onChange={(e) => setHospitalCare(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {hospitalCare === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>

        {/* Vision Problems */}
        <div className="fields">
          <div className="dflex">
            <label>Do you have any problems with vision?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="visionProblems"
                value="no"
                checked={visionProblems === "no"}
                onChange={(e) => setVisionProblems(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="visionProblems"
                value="yes"
                checked={visionProblems === "yes"}
                onChange={(e) => setVisionProblems(e.target.value)}
              />
              <span>Yes</span>
            </label></div>
          {visionProblems === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>

        {/* Hearing Problems */}
        <div className="fields">
          <div className="dflex">
            <label>Do you have any problems with hearing?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="hearingProblems"
                value="no"
                checked={hearingProblems === "no"}
                onChange={(e) => setHearingProblems(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="hearingProblems"
                value="yes"
                checked={hearingProblems === "yes"}
                onChange={(e) => setHearingProblems(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {hearingProblems === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>

        {/* Learning Difficulties */}
        <div className="fields">
          <div className="dflex">
            <label>Have you been diagnosed with Dyslexia, Dyspraxia, Autism, ADHD, or similar?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="learningDifficulties"
                value="no"
                checked={learningDifficulties === "no"}
                onChange={(e) => setLearningDifficulties(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="learningDifficulties"
                value="yes"
                checked={learningDifficulties === "yes"}
                onChange={(e) => setLearningDifficulties(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {learningDifficulties === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>

        {/* COVID Vaccinations */}
        <div className="fields">
          <div className="dflex">
            <label>Have you received your COVID-19 vaccinations?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="covidVaccinations"
                value="no"
                checked={covidVaccinations === "no"}
                onChange={(e) => setCovidVaccinations(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="covidVaccinations"
                value="yes"
                checked={covidVaccinations === "yes"}
                onChange={(e) => setCovidVaccinations(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {covidVaccinations === "yes" && (
            <input type="text" placeholder="How many doses?" />
          )}
        </div>

        {/* Accidents / Operations */}
        <div className="fields">
          <div className="dflex">
            <label>Have you had any accidents, operations, or conditions not mentioned above?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="accidents"
                value="no"
                checked={accidents === "no"}
                onChange={(e) => setAccidents(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="accidents"
                value="yes"
                checked={accidents === "yes"}
                onChange={(e) => setAccidents(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {accidents === "yes" && (
            <input type="text" placeholder="Please provide details" />
          )}
        </div>
{/* Pregnant */}
        <div className="fields">
          <div className="dflex">
            <label>Are you pregnant or could you be pregnant?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="pregnant"
                value="no"
                checked={pregnant === "no"}
                onChange={(e) => setPregnant(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="pregnant"
                value="yes"
                checked={pregnant === "yes"}
                onChange={(e) => setPregnant(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {pregnant === "yes" && (
            <input type="text" placeholder="How many weeks?" />
          )}
        </div>

        {/* Wheelchair / Walking Aids */}
        <div className="fields">
          <div className="dflex">
            <label>Do you use a wheelchair or require walking aids?</label>
          </div>
          <div className="options">
            <label>
              <input
                type="radio"
                name="wheelchair"
                value="no"
                checked={wheelchair === "no"}
                onChange={(e) => setWheelchair(e.target.value)}
              />
              <span>No</span>
            </label>
            <label>
              <input
                type="radio"
                name="wheelchair"
                value="yes"
                checked={wheelchair === "yes"}
                onChange={(e) => setWheelchair(e.target.value)}
              />
              <span>Yes</span>
            </label>
          </div>
          {wheelchair === "yes" && (
            <input type="text" placeholder="Please specify" />
          )}
        </div>

      </form>
    </div>
  );
};

export default MedicalHistoryStep;