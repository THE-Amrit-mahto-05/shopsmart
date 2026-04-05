import { useState } from "react";
import { createProduct } from "../api/products";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const res = await createProduct({ name, price });

    if (res.id) {
      alert("Product added");
    } else {
      alert("Failed");
    }
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}