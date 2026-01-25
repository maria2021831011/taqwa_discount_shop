import { stockOverview } from "../models/ownerModel";

export default function StockOverview() {
  return (
    <section className="card">
      <h3>Stock Overview</h3>
      {stockOverview.map((item, idx) => (
        <div key={idx} className="row">
          <span>{item.product}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </section>
  );
}
