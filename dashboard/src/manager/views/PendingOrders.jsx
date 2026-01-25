import { pendingOrders } from "../models/managerModel";

export default function PendingOrders() {
  return (
    <section className="card">
      <h3>Pending Orders</h3>
      {pendingOrders.map((order, idx) => (
        <div key={idx} className="row">
          <span>{order.orderId}</span>
          <span>{order.customer}</span>
          <span>{order.status}</span>
        </div>
      ))}
    </section>
  );
}
