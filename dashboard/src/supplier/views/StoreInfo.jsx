import { store } from "../models/supplierModel";

export default function StoreInfo() {
  return (
    <section className="card">
      <h3>Store Info</h3>
      <p>Address: {store.address}</p>
      <p>Phone: {store.phone}</p>
    </section>
  );
}
