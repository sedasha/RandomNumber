import { useState } from 'react'
import Random from './Random'
import './random.scss'
import _uniqueId from 'lodash/uniqueId';

const MainRandom = () => {
    const [number, setNumber] = useState([])
    const [startNumber, setStartNumber] = useState(0)
    const [endNumber, setEndNumber] = useState(100)
    const [times, setTimes] = useState(1)
    const [count] = useState(1)
    


    const ClickChange = () => {
       
        const number2 = []
        for (let i = 0; i < times; i++) {
            number2.push(Math.floor(Math.random() * (endNumber - startNumber + 1) + startNumber))
            console.log(Math.floor(Math.random() * ((endNumber - startNumber) + 1) + startNumber))
            console.log(number2 + 'l')
        }
        console.log(number2 +'number2')
        setNumber(number2)
    }
  
    console.log(count)
    
    return (
        <div className="container">
            <h1>Random number:</h1>
            <ul className="list">
                {number.map((num, ind) =>{
                    return <li key={_uniqueId('prefix-')}><Random number={num} times={times} /></li>
                })}
            </ul>
            <button className="button" onClick={ClickChange}>Generate</button>
            <div className='quantity'>
                <p className='text'>The quantity of numbers you want to generate.</p>
                <input className="betweenNumber" type='number' value={times} onChange={e => setTimes(e.target.value - 0)} />
            </div>
            <div className='quantity'>
                <p className='text'>Enter the range</p>
                from <input className="betweenNumber" type="number" value={startNumber} onChange={e => setStartNumber(e.target.value - 0)} />
            to <input className="betweenNumber" type="number" value={endNumber} onChange={e => setEndNumber(e.target.value - 0)} />
            </div>
        </div>
    )
}

export default MainRandom