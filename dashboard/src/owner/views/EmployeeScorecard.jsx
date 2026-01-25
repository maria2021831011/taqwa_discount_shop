import { employeeScorecard } from "../models/ownerModel";

export default function EmployeeScorecard() {
  return (
    <section className="card">
      <h3>Employee Performance Scorecard</h3>
      {employeeScorecard.map((emp, idx) => (
        <div key={idx} className="row">
          <span>{emp.name}</span>
          <span>{emp.score}%</span>
        </div>
      ))}
    </section>
  );
}
