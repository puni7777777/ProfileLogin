import React, { useEffect, useState } from 'react'
import './attend.css'

export default function Attend() {
    const [color_change, setColor_change] = useState('rollno-selected')
    const [rollnumbers, setRollnumbers] = useState([{ rollnos: '' }, { rollnos: '' }])
    const [temp, setTemp] = useState('')
    const [numbers, setNumbers] = useState(temp)

    const click = () => {
        if (color_change == 'rollno-selected') {
            setColor_change('rollno-not-selected')
        }
        else {
            setColor_change('rollno-selected')
        }
    }

    const change = (e) => {
        setTemp(e.target.value)
    }

    const update_nos = () => {
        setNumbers(temp)
    }

    useEffect(()=>{
        for (let i = 0; i < numbers; i++) {
            
        }
    },[])


    return (
        <div className='numbers'>
            <input type="number" min='0' onChange={change} value={temp} />
            <div className={color_change} onClick={click}>
                {temp}
            </div>
            <h2>{temp}</h2>
            <h2>{numbers}</h2>
            <div className="rollnos">
                <button className='submitbtn' type='submit' onClick={update_nos}>generate</button>
            </div>
        </div>
    )
}
