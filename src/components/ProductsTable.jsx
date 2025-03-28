import { useCartInitializer, useCartStore } from "@store/cartStore";
import CartActions from "./CartActions";
import { formatePrice } from "@utils/formattePrice";
export function ProductsTable() {
  useCartInitializer()
  const { cart, removeAllFromCart } = useCartStore()
  let subtotal = 0
  let envio = 0
  let impuesto = 0
  let total = 0
  cart.forEach((item) => {
    total += item.price * item.quantity
    subtotal = total / 1.18
    impuesto = total - subtotal
  })
  return (
    <>
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      <p className="">{cart.length} productos</p> 
    </div>
      <div className="relative grid grid-cols-1 ">
        {cart.length === 0 ? (
          <p className="justify-self-center font-bold">Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8 ">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg border border-gray-400 shadow-sm ">
                  <ul className="divide-y">
                    {cart.map((item) => (
                      <li key={item.id} className="p-4 sm:p-6 border-gray-400">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0 bg-muted rounded-md overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="h-24 w-24 object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <h3 className="flex font-medium">{item.title}</h3>
                            <CartActions id={item.id} client:load />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg border border-gray-400 shadow-sm p-6">
                  <h2 className="text-lg font-medium mb-4">Resumen del Pedido</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${formatePrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Envío</span>
                      <span>${envio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IGV (18%)</span>
                      <span>${formatePrice(impuesto)}</span>
                    </div>
                    <br className="my-3" />
                    <div className="flex justify-between font-medium text-base">
                      <span>Total</span>
                      <span>${formatePrice(total)}</span>
                    </div>
                  </div>
                  <button 
                    className="w-full mt-6 bg-gray-500 border rounded-md text-white py-2 px-4 hover:bg-gray-600 transition"
                  >
                    Generar Proforma
                  </button>
                </div>
              </div>
            </div>
          <button onClick={() => removeAllFromCart() }
            className="flex justify-self-center mt-5 bg-gray-400 rounded-full px-2 py-1 font-semibold 
            w-fit hover:scale-105 transition">
            Vaciar Carrito
          </button>
        </>
          
        )} 
      </div>
    </>
  )
}