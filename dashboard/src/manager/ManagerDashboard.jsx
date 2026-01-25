import "./styles/manager.css";
import ManagerHeader from "./views/ManagerHeader";
import DailySales from "./views/DailySales";
import StockUpdate from "./views/StockUpdate";
import TargetVsAchieved from "./views/TargetVsAchieved";
import EmployeeSchedule from "./views/EmployeeSchedule";
import CustomerFeedback from "./views/CustomerFeedback";
import PendingOrders from "./views/PendingOrders";

export default function ManagerDashboard() {
  return (
    <>
      <ManagerHeader />
      <main>
        <DailySales />
        <StockUpdate />
        <TargetVsAchieved />
        <EmployeeSchedule />
        <CustomerFeedback />
        <PendingOrders />
      </main>
    </>
  );
}
