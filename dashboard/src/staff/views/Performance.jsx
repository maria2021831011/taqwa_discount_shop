import { staffPerformance } from "../models/staffModel";

export default function Performance() {
  return (
    <section className="card">
      <h3>My Performance</h3>
      <p>Name: {staffPerformance.name}</p>
      <p>Sales Done Today: {staffPerformance.salesDone}</p>
    </section>
  );
}
