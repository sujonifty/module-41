import { useState } from "react"
import Watch from "./components/Watch/Watch"
import { useEffect } from "react";



function App() {

  //way-1: We can show data as in memory object/locally
  /*
  const watches = [
    { name: 'Apple', price: 200, id: 1, color: 'Gold' },
    { name: 'Casino', price: 100, id: 2, color: 'White' },
    { name: 'Bonband', price: 400, id: 3, color: 'Black' },
    { name: 'Osaca', price: 200, id: 4, color: 'Prink' },
  ]
  */

  //way-2: We can show data using json file
  const [watches,setWatches]=useState([]);
  useEffect(()=>{
    fetch('Watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  return (
    <>
      <h1>ES6  overview</h1>
      <div>
        {
          watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
        }
      </div>

    </>
  )
}

export default App
