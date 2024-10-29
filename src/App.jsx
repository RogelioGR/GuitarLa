import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { DB } from "./data/DB";
/* import { useEffect } from "react";
 */import { useState } from "react"


function App() {
  const [data, setData] = useState (DB)
  const [cart, setCart] = useState([])

  const MAX_ITEMS = 5
  const MIN_ITEMS = 1


function addToCart(item){
  const itemExist = cart.findIndex(guitar=> guitar.id === item.id)
  // existe en el carrito 
  if(itemExist >= 0 ){
    if(cart[itemExist].quantity >= MAX_ITEMS) return
    const updatedCart = [...cart]
    updatedCart[itemExist].quantity++
    setCart(updatedCart)
  }
  else{
    item.quantity = 1
    setCart([...cart, item])  }
}

function removeFromCart(id){
  setCart(prevCat => prevCat.filter(guitar => guitar.id !== id))
}

function decreaseQuantity(id){
  const UpdatedCart = cart.map(item =>{
    if (item.id === id  && item.quantity > MIN_ITEMS){
      return{
        ...item,
        quantity: item.quantity - 1 
      }
    } 
    return item
  })
  setCart(UpdatedCart)
}

function increaseQuantity(id){
  const updatedCart = cart.map(item =>{
    if (item.id === id  && item.quantity < MAX_ITEMS){
      return{
        ...item,
        quantity: item.quantity + 1 
      }
    } 
    return item
  })  
  setCart(updatedCart)
}

function CleanCart(){
  setCart([])
}



  return (
    <>
    <Header
    cart={cart}
    removeFromCart = {removeFromCart}
    increaseQuantity = {increaseQuantity}
    decreaseQuantity ={decreaseQuantity}
    CleanCart = {CleanCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map(( guitar )=> {
              return(
                <Guitar
                key={guitar.id}
                  guitar={guitar}
                  setCart={setCart}
                  addToCart={addToCart}
                />
              )
            })
          }
        
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
        </div>
    </footer>
    </>
  )
}

export default App
