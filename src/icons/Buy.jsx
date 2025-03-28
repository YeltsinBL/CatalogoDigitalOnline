export const Add = ({fill, width, height}) => (
  <svg viewBox="0 0 24 24" fill={fill} width={width} height={height}  stroke="#00ff04">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#00ff04"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#00ff04"></path> </g></svg>
)
export const MinusCircle = ({fill, width, height}) => (
  <svg fill={fill} width={width} height={height} viewBox="0 0 30.334 30.334" xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <g> <path d="M15.167,30.334c-8.362,0-15.166-6.805-15.166-15.167C0.001,6.804,6.805,0,15.167,0c8.361,0,15.166,6.804,15.166,15.167 C30.333,23.529,23.528,30.334,15.167,30.334z M15.167,4C9.01,4,4.001,9.009,4.001,15.167S9.01,26.334,15.167,26.334 s11.166-5.009,11.166-11.167S21.324,4,15.167,4z M24.824,15.167c0-1.657-1.343-3-3-3H8.509c-1.657,0-3,1.343-3,3 c0,1.656,1.343,3,3,3h13.315C23.481,18.167,24.824,16.823,24.824,15.167z"></path> </g> </g></svg>
)
export const Basket = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart">
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)
export const Trash = ({stroke, width, height}) => (
  <svg viewBox="0 0 24 24" fill="none" width={width} height={height}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
    </g>
  </svg>
)

export const Minus = ({stroke, width, height}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} width={width} height={height} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <path d="M6 12L18 12" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
    </g>
  </svg>
)
export const Plus = ({stroke, width, height}) => (
  <svg viewBox="0 0 24 24" fill="none" width={width} height={height}>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> 
      <path d="M4 12H20M12 4V20" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
)