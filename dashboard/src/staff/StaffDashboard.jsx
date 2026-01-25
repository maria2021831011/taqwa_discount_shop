import "./styles/staff.css"; 
import StaffHeader from "./views/StaffHeader";
import POS from "./views/POS";
import ProductSearch from "./views/ProductSearch";
import CustomerForm from "./views/CustomerForm";
import SalesSummary from "./views/SalesSummary";
import Performance from "./views/Performance";
import Stock from "./views/Stock";

export default function StaffDashboard() {
  return (
    <>
      <StaffHeader />
      <main>
        <POS />
        <ProductSearch />
        <CustomerForm />
        <SalesSummary />
        <Performance />
        <Stock />
      </main>
    </>
  );
}
