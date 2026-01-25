import { birdsEyeView } from "../models/ownerModel";

export default function BirdsEyeView() {
  return (
    <section className="card">
      <h3>Business Bird's Eye View</h3>
      <div className="row">
        <span>Total Sales:</span>
        <span>৳{birdsEyeView.totalSales}</span>
      </div>
      <div className="row">
        <span>Total Orders:</span>
        <span>{birdsEyeView.totalOrders}</span>
      </div>
      <div className="row">
        <span>Total Customers:</span>
        <span>{birdsEyeView.totalCustomers}</span>
      </div>
      <div className="row">
        <span>Total Products:</span>
        <span>{birdsEyeView.totalProducts}</span>
      </div>
    </section>
  );
}
