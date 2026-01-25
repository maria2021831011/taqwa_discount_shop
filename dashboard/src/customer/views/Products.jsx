import { products } from "../models/customerModel";

export default function Products() {
  return (
    <section className="card">
      <h3>Product Browsing</h3>
      {products.map(p => (
        <p key={p.id}>{p.name} - {p.price}</p>
      ))}
    </section>
  );
}
