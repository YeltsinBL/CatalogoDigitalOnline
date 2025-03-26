import { Add, Minus } from "@icons/Buy"
import { useCartInitializer, useCartStore } from "@store/cartStore"

export function CardBuyButton ({id}) {
  useCartInitializer()
  const { cart, addToCart, removeFromCart } = useCartStore()

  // Verifica si el producto ya está en el carrito
  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => isInCart ? removeFromCart(id) : addToCart({ id })

  return (
    <button onClick={handleClick} className="card-buy-button rounded-full " >
      {isInCart ? <Minus /> : <Add />}
    </button>
  )
}