import { notifications } from "../models/ownerModel";

export default function Notifications() {
  return (
    <section className="card">
      <h3>Important Notifications</h3>
      {notifications.map((note, idx) => (
        <div key={idx} className={`row ${note.type}`}>
          {note.message}
        </div>
      ))}
    </section>
  );
}
