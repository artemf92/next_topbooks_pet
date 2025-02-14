import { API } from "@/app/(site)/api";
import { Product } from "@/interfaces/Product.props";

export default async function getProducts(category: string, limit: number): Promise<Product[] | null> {
  if (!category) return null;

  const res = await fetch(API.product.find, {
    method: "POST",
    body: JSON.stringify({
      category, limit
    }),
    headers: new Headers({'Content-Type': 'application/json'})
  })
  
  if (!res.ok) {
    return null;
  }

  return res.json()
}