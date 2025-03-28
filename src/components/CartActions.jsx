import { Minus, Plus, Trash } from "@icons/Buy";
import { useCartStore } from "@store/cartStore";

export default function CartActions({ id }) {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  const product = cart.find((p) => p.id === id);

  return (
    <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center border rounded-md border-gray-400">
      <button
        onClick={() => decreaseQuantity(id)}
        className="p-2 text-muted-foreground hover:text-foreground"
        aria-label="Decrease quantity"
      >
        <Minus stroke={"#6b6b6b"} width={"18"} height={"18"}/>
      </button>
      <span className="px-4 py-2 tabular-nums">{product.quantity}</span>
      <button
        onClick={() => increaseQuantity(id)}
        className="p-2 text-muted-foreground hover:text-foreground"
        aria-label="Increase quantity"
      >
        <Plus stroke={"#6b6b6b"} width={"18"} height={"18"} />
      </button>
      </div>
      <div className="flex items-center gap-2">
      <button
        onClick={() => removeFromCart(id)}
        className="flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <Trash stroke={"#6b6b6b"} width={"18"} height={"18"}/>
        Remove
      </button>
      <span className="font-medium">${(product.price * product.quantity).toFixed(2)}</span>
      </div>
  </div>
  );
}