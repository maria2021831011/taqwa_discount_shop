import "./styles/customer.css";
import Header from "./views/Header";
import Loyalty from "./views/Loyalty";
import OrderHistory from "./views/OrderHistory";
import Profile from "./views/Profile";
import Products from "./views/Products";

export default function CustomerDashboard() {
  return (
    <>
      <Header />
      <main>
        <Loyalty />
        <OrderHistory />
        <Profile />
        <Products />
      </main>
    </>
  );
}
