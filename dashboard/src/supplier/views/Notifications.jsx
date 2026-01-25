import { notifications } from "../models/supplierModel";

export default function Notifications() {
  return (
    <section className="card">
      <h3>Purchase Order Notifications</h3>
      {notifications.map((n, i) => <p key={i}>{n}</p>)}
    </section>
  );
}
