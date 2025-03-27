import { useState, useEffect } from "react";
import { CardBuyButton } from "./CardBuyButton";

export function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <header className="flex flex-row gap-6 p-4 mt-10">
      {loading ? (
        <>
        <picture className="aspect-square w-52 flex-none"></picture>
        <div className="flex flex-col justify-between">
          <h2 className="flex flex-1 items-end">Cargando</h2>
          <div>
          <h1 className="line-clamp-1 text-5xl font-bold block">
              {product?.title} <span ></span>
          </h1>
          </div>
          <div className="flex-1 flex items-end">
          <div className="text-sm  font-normal">
            <span>Cargando</span>
            <p className="mt-1">
              <span className="text-black">$0</span>
            </p>
          </div>
          </div>
        </div>
        </>
      ):(
        <>
        <picture className="aspect-square w-52 flex-none">
          <img src={product?.image} alt={product?.title} 
            className="object-cover w-full h-full shadow-lg" />
        </picture>
        <div className="flex flex-col justify-between">
          <h2 className="flex flex-1 items-end">{product?.category}</h2>
          <div>
          <h1 className="line-clamp-1 text-5xl font-bold block">
            {product?.title} <span ></span>
          </h1>
          </div>
          <div className="flex-1 flex items-end">
          <div className="text-sm  font-normal">
            <span>{product?.description}</span>
            <p className="mt-1">
              <span className="text-black font-bold">${product?.price}</span>
            </p>
            <CardBuyButton principal={false} id={product?.id} name={product?.title} price={product?.price} />
          </div>
          </div>
        </div>
        </>
      )}
    </header>
  );
}
