import { salesGraph } from "../models/ownerModel";

export default function SalesGraph() {
  return (
    <section className="card">
      <h3>Sales Graph (Dummy Data)</h3>
      <p>Daily Sales: {salesGraph.daily.join(", ")}</p>
      <p>Weekly Sales: {salesGraph.weekly.join(", ")}</p>
      <p>Monthly Sales: {salesGraph.monthly.join(", ")}</p>
    </section>
  );
}
