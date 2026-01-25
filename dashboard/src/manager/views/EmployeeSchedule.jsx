import { employeeSchedule } from "../models/managerModel";

export default function EmployeeSchedule() {
  return (
    <section className="card">
      <h3>Employee Schedule</h3>
      {employeeSchedule.map((emp, idx) => (
        <div key={idx} className="row">
          <span>{emp.name}</span>
          <span>{emp.shift}</span>
        </div>
      ))}
    </section>
  );
}
