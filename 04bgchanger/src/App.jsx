import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
   
    <div className=' w-full h-screen duration-200'
    style={{backgroundColor : color}}>

      <div className=" fixed flex flex-wrap justify-center  top-12 inset-x-0 px-2">
        <h1 className='fixed flex flex-wrap justify-center text-lg font-bold top-2 decoration-auto'>Background color Changer</h1>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl "> <button onClick={() => setColor("red")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "red"}}>Red</button>

        <button onClick={() => setColor("Pink")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "pink"}}>Pink</button>
        <button onClick={() => setColor("Green")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "Green"}}>Green</button>
        <button onClick={() => setColor("Yellow")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "yellow"}}>Yellow</button>
        <button onClick={() => setColor("Purple")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "purple"}}>Purple</button>
        <button onClick={() => setColor("Grey")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "grey"}}>Grey</button>
        <button onClick={() => setColor("Orange")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "Orange"}}>Orange</button>
        <button onClick={() => setColor("White")} className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '  style={{backgroundColor : "white"}}>White</button>
        <button onClick={() => setColor("Blue")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "blue"}}>Blue</button>
        <button onClick={() => setColor("Black")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '  style={{backgroundColor : "black"}}>Black</button>
        
        </div>

       
      </div>

      

    </div>
  )
}

export default App
