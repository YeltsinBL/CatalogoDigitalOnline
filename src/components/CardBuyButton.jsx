import { Add, MinusCircle } from "@icons/Buy"
import { useCartInitializer, useCartStore } from "@store/cartStore"

export function CardBuyButton ({principal= true, product}) {
  useCartInitializer()
  const { cart, addToCart, removeFromCart } = useCartStore()

  // Verifica si el producto ya está en el carrito
  const isInCart = cart.some((item) => item.id === product.id);

  const handleClick = () => isInCart ? 
    removeFromCart(product.id) : 
    addToCart({id:product.id, title:product.title, price:product.price, image:product.image});

  return (
    <>
    {
      principal ? (
        <button onClick={handleClick} className="card-buy-button rounded-full " >
          {isInCart ? 
            <MinusCircle fill={"#6b6b6b"} width={"48"} height={"48"}/> : 
            <Add fill={"none"} width={"48"} height={"48"} />}
        </button>
      ) : (
        <button 
          className={`mt-4 px-4 py-2 rounded ${isInCart ? "bg-red-500" : "bg-green-500"} text-white`} 
          onClick={handleClick}
        >
          {isInCart ? "Quitar del carrito" : "Agregar al carrito"}
        </button>
      )
    }
    </>
  )
}