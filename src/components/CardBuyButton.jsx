import { Add, Minus } from "@icons/Buy"
import { useCartInitializer, useCartStore } from "@store/cartStore"

export function CardBuyButton ({principal= true, id, name, price}) {
  useCartInitializer()
  const { cart, addToCart, removeFromCart } = useCartStore()

  // Verifica si el producto ya está en el carrito
  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => isInCart ? removeFromCart(id) : addToCart({ id, name, price });

  return (
    <>
    {
      principal ? (
        <button onClick={handleClick} className="card-buy-button rounded-full " >
          {isInCart ? <Minus /> : <Add />}
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