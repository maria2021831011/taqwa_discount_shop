import { recentActivity } from "../models/ownerModel";

export default function RecentActivity() {
  return (
    <section className="card">
      <h3>Recent Logins & Activities</h3>
      {recentActivity.map((act, idx) => (
        <div key={idx} className="row">
          <span>{act.user}</span>
          <span>{act.action}</span>
          <span>{act.time}</span>
        </div>
      ))}
    </section>
  );
}
