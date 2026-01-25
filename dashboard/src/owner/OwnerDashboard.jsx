import "./styles/owner.css";
import OwnerHeader from "./views/OwnerHeader";
import BirdsEyeView from "./views/BirdsEyeView";
import SalesGraph from "./views/SalesGraph";
import EmployeeScorecard from "./views/EmployeeScorecard";
import ProfitLoss from "./views/ProfitLoss";
import StockOverview from "./views/StockOverview";
import RecentActivity from "./views/RecentActivity";
import Notifications from "./views/Notifications";

export default function OwnerDashboard() {
  return (
    <>
      <OwnerHeader />
      <main>
        <Notifications />
        <BirdsEyeView />
        <SalesGraph />
        <EmployeeScorecard />
        <ProfitLoss />
        <StockOverview />
        <RecentActivity />
      </main>
    </>
  );
}
