import { customer } from "../models/customerModel";

export default function Loyalty() {
  return (
    <section className="card">
      <h3>Loyalty Points & Offers</h3>
      <p>Points: {customer.loyaltyPoints}</p>
    </section>
  );
}

