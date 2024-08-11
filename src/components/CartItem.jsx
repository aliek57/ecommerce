import {toast} from 'react-toastify'

const CartItem = ({item, onUpdateCart, onRemoveFromCart}) => {

    const handleQuantityChange = (e)=>{
        let newQuantity = parseInt(e.target.value)

        if(newQuantity < 1){
            toast.warning('Clique em remover se deseja retirar o item do carrinho')
            newQuantity = 1
        }else if(newQuantity > 10){
            toast.error('A quantidade deve ser menor que 10')
            newQuantity = 10
        }

        onUpdateCart(item, newQuantity)
    }

  return (
    <div className='cart-item'>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="cart-buttons">
        <input
        type="number"
        value={item.quantity}
        min="1"
        max="10"
        onChange={handleQuantityChange}/>
        <button onClick={()=> onRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  )
}

export default CartItem
