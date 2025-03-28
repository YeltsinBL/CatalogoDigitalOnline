import { Basket } from "@icons/Buy"
import { useCartInitializer, useCartStore } from "@store/cartStore"

export function CardBasketButton() {
  useCartInitializer()
  const { cart } = useCartStore()  
  return (
    <div className="relative">
      <Basket />
      <div className="absolute bg-gray-300 rounded-full  text-center -right-2 -top-2.5 text-sm  px-1 font-semibold">
        {cart.length}
      </div>
    </div>
  )
}