import { todaySales } from "../models/staffModel";

export default function SalesSummary() {
  return (
    <section className="card">
      <h3>Today's Sales Summary</h3>
      <p>Total Sales: ৳{todaySales.totalSales}</p>
      <p>Total Orders: {todaySales.totalOrders}</p>
    </section>
  );
}
