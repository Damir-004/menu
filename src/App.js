import React,{useEffect, useState} from 'react';
import './App.css';

let data = ['Bacon', 'Tuna', 'Tuna pants']
function App() {
    const [items] = useState(data)
    const [value, setValue] = useState('')
    const [show, setShow] =useState(false)
    useEffect(()=>{
        setShow(false)
    },[value])
    return(
        <div className='container'>
            <h1>Selected: {value}</h1>
            <button onClick={()=> setShow(!show)}>OPEN MENU</button>
            {show && <ul>
                    {items.map((item, index)=><li onClick={()=>setValue(item)} key={index}>{item}</li>)}
                </ul>
            }
        </div>
    )
}
export default App