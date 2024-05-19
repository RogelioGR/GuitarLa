import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { DB } from "./data/DB";
/* import { useEffect } from "react";
 */import { useState } from "react"


function App() {
  const [data, setData] = useState (DB)
  const [cart, setCart] = useState([])

function addToCart(item){

  const itemExist = cart.findIndex(guitar=> guitar.id === item.id)
  // existe en el carrito 
  if(itemExist >= 0 ){
    const updatedCart = [...cart]
    updatedCart[itemExist].quantity++
    setCart(updatedCart)
  }
  else{
    console.log('No existe...  agregando... ')
    item.quantity = 1
    setCart([...cart, item])  }
 
}

  return (
    <>
    <Header />

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
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
