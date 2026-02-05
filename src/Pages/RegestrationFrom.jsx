import Steps from "../Components/Regestration/Steps";
import InfoStep from "../Components/Regestration/InfoStep";
import NavigationButton from "../Components/Regestration/NavigationButtons";
import ThankyouStep from "../Components/Regestration/ThankyouStep";
import AddonsStep from "../Components/Regestration/AddonsStep";
import Finishing from "../Components/Regestration/Finishing";
import PlanStep from "../Components/Regestration/PlanStep";
import MedicalHistoryStep from "../Components/Regestration/MedicalHistoryStep";
import DentalHistory from "../Components/Regestration/DentalHistory";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
function App() {
  const page = useSelector((e) => e.page.value);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <InfoStep />;
      case 1:
        return <PlanStep />;
      case 2:
        return <AddonsStep />;
      case 3:
        return <Finishing />;
      case 4:
        return <MedicalHistoryStep />;
      case 5:
        return <DentalHistory />;
      case 6:
        return <ThankyouStep />;
      default:
        return <InfoStep />;
    }
  };

  return (
    <section className="FromContainer">
      <Helmet>
        <title>Register Today & Enjoy More Dental Care Benefits</title>
        <meta
          name="description"
          content="Register today to unlock extra dental care benefits, priority services, and personalised treatment options."
        />
      </Helmet>
      <div className="Container">
        <Steps />
        <div className="content">
          {PageDisplay()}
          {page !== 6 && <NavigationButton />}
        </div>
      </div>
    </section>
  );
}

export default App;
