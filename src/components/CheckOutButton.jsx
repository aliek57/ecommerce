import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const CheckOutButton = ({cartItems, setCartItems}) => {
    const navigate = useNavigate()

    const handleCheckOut = () => {
        toast.success('Compra realizada!')

        navigate('/thank-you', {state: {cartItems}})

        setCartItems([])
    }

  return (
    <div>
      <button onClick={handleCheckOut}>Finalizar Compra</button>
    </div>
  )
}

export default CheckOutButton
