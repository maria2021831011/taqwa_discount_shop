import { orders } from "../models/customerModel";

export default function OrderHistory() {
  return (
    <section className="card">
      <h3>Purchase History</h3>
      {orders.map((o) => (
        <p key={o.id}>{o.item} - {o.status}</p>
      ))}
    </section>
  );
}
