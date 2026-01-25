import { products } from "../models/staffModel";

export default function POS() {
  return (
    <section className="card">
      <h3>POS Interface</h3>
      {products.map(p => (
        <div key={p.id} className="row">
          <span>{p.name}</span>
          <span>৳{p.price}</span>
          <button>Add</button>
        </div>
      ))}
    </section>
  );
}
