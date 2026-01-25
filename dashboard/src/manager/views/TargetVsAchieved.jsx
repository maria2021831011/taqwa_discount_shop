import { targetVsAchieved } from "../models/managerModel";

export default function TargetVsAchieved() {
  return (
    <section className="card">
      <h3>Today's Target vs Achieved</h3>
      <p>Target: ৳{targetVsAchieved.target}</p>
      <p>Achieved: ৳{targetVsAchieved.achieved}</p>
      <progress value={targetVsAchieved.achieved} max={targetVsAchieved.target}></progress>
    </section>
  );
}
