import { dailySales } from "../models/managerModel";

export default function DailySales() {
  return (
    <section className="card">
      <h3>Daily Sales Snapshot</h3>
      <p>Total Sales: ৳{dailySales.totalSales}</p>
      <p>Total Orders: {dailySales.totalOrders}</p>
    </section>
  );
}
