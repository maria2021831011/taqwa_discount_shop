import { customerFeedback } from "../models/managerModel";

export default function CustomerFeedback() {
  return (
    <section className="card">
      <h3>Customer Feedback</h3>
      {customerFeedback.map((fb, idx) => (
        <div key={idx} className="feedback">
          <strong>{fb.customer}:</strong> {fb.feedback}
        </div>
      ))}
    </section>
  );
}
