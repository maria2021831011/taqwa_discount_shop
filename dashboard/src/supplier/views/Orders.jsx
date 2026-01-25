import { orders } from "../models/supplierModel";

export default function Orders() {
  return (
    <section className="card">
      <h3>Orders</h3>
      {orders.map(o => (
        <p key={o.id}>Order #{o.id} - {o.status}</p>
      ))}
    </section>
  );
}
