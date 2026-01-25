import { profitLoss } from "../models/ownerModel";

export default function ProfitLoss() {
  return (
    <section className="card">
      <h3>Profit & Loss</h3>
      <div className="row">
        <span>Revenue:</span>
        <span>৳{profitLoss.revenue}</span>
      </div>
      <div className="row">
        <span>Expense:</span>
        <span>৳{profitLoss.expense}</span>
      </div>
      <div className="row">
        <span>Profit:</span>
        <span>৳{profitLoss.profit}</span>
      </div>
    </section>
  );
}
