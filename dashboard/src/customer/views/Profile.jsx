import { customer } from "../models/customerModel";

export default function Profile() {
  return (
    <section className="card">
      <h3>Profile Management</h3>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
    </section>
  );
}
