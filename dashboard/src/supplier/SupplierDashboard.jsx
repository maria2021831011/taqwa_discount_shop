import "./styles/supplier.css";
import SupplierHeader from "./views/SupplierHeader";
import Notifications from "./views/Notifications";
import Orders from "./views/Orders";
import StoreInfo from "./views/StoreInfo";
import InvoiceUpload from "./views/InvoiceUpload";
import Messages from "./views/Messages";

export default function SupplierDashboard() {
  return (
    <>
      <SupplierHeader />
      <main>
        <Notifications />
        <Orders />
        <StoreInfo />
        <InvoiceUpload />
        <Messages />
      </main>
    </>
  );
}
