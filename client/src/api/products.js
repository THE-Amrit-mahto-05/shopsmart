import { getToken } from "../utils/auth";

const BASE_URL = "http://localhost:3000";

export async function createProduct(data) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify(data),
  });

  return res.json();
}