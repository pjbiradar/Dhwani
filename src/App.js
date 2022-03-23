import { useState } from "react";
import React from 'react'
import './style.css'


function App() {

  // const [data, setData] = useState('')
  // const [num, setNum] = useState('')
  // const [number, setNumber] = useState('')
  // const [numbers, setNumbers] = useState('')
  const [sub, setSub] = useState([{ num: '', data: '', number: '', numbers: '' }])
  const [sum, setSum] = useState([''])

  const change = (e) => {
    // setData(e.target.value)
    setSub({ ...sub, [e.target.name]: e.target.value })
  }

  const move = (e) => {
    e.preventDefault()
    const newdata = { ...sub, id: new Date().getTime().toString() }
    setSum([...sum, newdata])
  }


  return (
    <div className="App">


      <form onSubmit={move} method="post">
        <label className="heading">Card Number</label>
        <div className="styling">
          <input className="style" id="id1" type="tel"  value={sub.value} name="data" maxLength={4} autoFocus onChange={change} />
          <input className="style" id="second" type="tel" value={sub.value} name="num" maxLength={4} onChange={change} />
          <input className="style" id="id3" type="tel" value={sub.value} name="number" maxLength={4} onChange={change} />
          <input className="style" id="id4" type="tel" value={sub.value} name="numbers" maxLength={4} onChange={change} />
        </div>
        <button  type="submit">submit</button>

      </form>


    </div>
  );
}

export default App;
