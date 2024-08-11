import {useLocation, useNavigate} from 'react-router-dom'

const ThankYou = () => {

  const navigate = useNavigate()
  const location = useLocation()

  // Extrair cartItems do estado do roteador
  const items = location.state?.cartItems ?? []

  const totalPrice = items.reduce(
    (total, item) => total+ item.price * item.quantity, 0
  )

  return (
    <div className='thank-you-page'>
      <ul>
        {items.map((item) => (
          <p key={item.id}>{item.quantity}x {item.name} - ${item.price}</p>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={()=> navigate('/')}>Voltar ao catálogo</button>
    </div>
  )
}

export default ThankYou
