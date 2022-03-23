import { useState } from "react";
import React from 'react'
import './style.css'


function App() {

  const [data, setData] = useState('')
  const [num, setNum] = useState('')
  const [number, setNumber] = useState('')
  const [numbers, setNumbers] = useState('')
  // const [sub, setSub] = useState([{ num: '', data: '', number: '', numbers: '' }])

  // const submit = (e) => {
  //   setSub({...sub, [e.target.name]:e.target.value})
  // }




  return (
    <div className="App">


      <form>
        <label className="heading">Card Number</label>
        <div className="styling">
          <input className="style" id="id1" type="tel" value={data} name="data" maxLength={4} autoFocus onChange={e => setData(e.target.value)} />

          <input className="style" id="second" type="tel" value={num} name="num" maxLength={4} onChange={e => setNum(e.target.value)} />
          <input className="style" id="id3" type="tel" value={number} name="number" maxLength={4} onChange={e => setNumber(e.target.value)} />
          <input className="style" id="id4" type="tel" value={numbers} name="numbers" maxLength={4} onChange={e => setNumbers(e.target.value)} />
        </div>
        <button type="submit">submit</button>
        {/* {sub} */}


      </form>


    </div>
  );
}

export default App;
