import { stockUpdates } from "../models/managerModel";

export default function StockUpdate() {
  return (
    <section className="card">
      <h3>Live Stock Update</h3>
      {stockUpdates.map((item, idx) => (
        <div key={idx} className={`row ${item.quantity < 10 ? "low-stock" : ""}`}>
          <span>{item.name}</span>
          <span>Qty: {item.quantity}</span>
        </div>
      ))}
    </section>
  );
}
