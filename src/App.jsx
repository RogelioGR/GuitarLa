import Header from "./Components/Header";
import Guitar from "./Components/Guitar";
import { DB } from "./data/DB";
/* import { useEffect } from "react";
 */import { useState } from "react"


function App() {
  const [data, setData] = useState (DB)

// para Apis la forma correcta para proyecto mas complejos
/* 
  useEffect (() => {
    setData (DB)
  }, []) */

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
