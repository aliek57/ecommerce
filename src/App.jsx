import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'

import Catalog from './components/Catalog'
import Cart from './components/Cart'
import ThankYou from './components/ThankYou'

import {ToastContainer, toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddCart = (product, quantity)=>{
    setCartItems((prevItems)=> {
      //se nao existir item no carrinho, adiciona
      //se existir aumenta a quantidade
      const itemExists = prevItems.find((item)=> item.id == product.id)

      if(itemExists){
        toast.info(`Quantidade do item ${product.name} atualizada!`)
        return prevItems.map((item)=> item.id == product.id ? {...item, quantity: item.quantity + quantity} : item)

      }else{
        toast.success(`Adicionado ${product.name} ao carrinho!`)
        return [...prevItems, {...product, quantity}]
      }
    })
  }

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems)=>{
      toast.info(`Quantidade do item ${product.name} atualizada!`)
      return prevItems.map((item)=> item.id == product.id ? {...item, quantity: +quantity} : item)
    })
  }

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} foi removido do carrinho.`)
    setCartItems((prevItems) => prevItems.filter((item)=> item.id !== product.id))
  }

  const handleCheckOut = () => {
    toast.success('Compra realizada!')
    setCartItems([])
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Catálogo</Link>
        <Link to='/cart'>Carrinho</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<Catalog onAddToCart={handleAddCart}/>} />
          <Route
          path='/cart'
          element={
            <Cart 
            cartItems={cartItems}
            setCartItems={setCartItems}
            onUpdateCart={handleUpdateCart}
            onRemoveFromCart={handleRemoveFromCart}
            onCheckOut={handleCheckOut}/>
          }
          />
          <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
      </div>
      <ToastContainer>
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover
      </ToastContainer>
    </BrowserRouter>
  )
}

export default App
