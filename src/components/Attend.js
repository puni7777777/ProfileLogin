import React, { useEffect, useState } from 'react'
import './attend.css'
import app from '../Firebase'
import { getDatabase, child, get, ref } from 'firebase/database'

export default function Attend() {
    const db = getDatabase(app)
    const [temp, setTemp] = useState('')
    const [rollnumbers, setRollnumbers] = useState(temp)
    const [nbrofbuttons, setNbrofbutton] = useState([]);
    const [whichclass, setwhichclass] = useState('');
    const no_of_students = [];
    const [iterator, setIterator] = useState(0);
    const present_students = [];
    const absent_students = [];
    const [checkyear, setCheckyear] = useState({ first_year: 'first-year', second_year: 'second-year', third_year: 'third-year', final_year: 'final-year', });

    const today = new Date();

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
    const today_date = date + '/' + month + '/' + year;

    const [studentData, setStudentData] = useState({ Date: today_date, Time: time, whichclass: whichclass, present: present_students, absent: absent_students });
    console.log(studentData);

    const change_button_color = (e, index) => {
        const name = e.target.name;
        const list = [...nbrofbuttons];
        if (list[index][name] === 'selected') {
            list[index][name] = 'not-selected';
        } else {
            list[index][name] = 'selected';
        }
        setNbrofbutton(list);
    }

    const change = (e) => {
        setTemp(e.target.value);
    }

    const update_nos = () => {
        if (temp === '0' | temp < '0') {
            alert("Enter the number of students");
        } else {
            setRollnumbers(temp);
        }
        for (let i = 0; i < temp; i++) {
            no_of_students.push({ btn: 'not-selected' });
        }
        setNbrofbutton(no_of_students);
    }

    const calculate_attendance = () => {
        const list = [...nbrofbuttons];
        let present = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i]['btn'] === 'selected') {
                present++;
                present_students.push(i + 1);
            } else {
                absent_students.push(i + 1);
            }
        }
        setIterator(present);
        setStudentData({ ...studentData, present: present_students, absent: absent_students });
    }

    const sendData = (e) => {

        e.preventDefault();
        calculate_attendance();

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        }
        const response = fetch('https://attendance-cdc09-default-rtdb.firebaseio.com/studentsPresent.json', options)

        if (response) {
            alert("Attendance Marked Successfully");
        }else{
            alert("Attendance Marking failed");
        }
    }

    const getData = async () => {
        const dbref = ref(db);

        get(child(dbref, 'presentList').then((snapshot) => {
            var List = []

            snapshot.forEach(childsnapshot => {
                List.push(childsnapshot.val());
            });
            console.log(List);
        }))
    }

    const handleCheck = (e) => {
        setStudentData({ ...studentData, whichclass: e.target.value });
    }

    return (
        <div className='total-form'>
            <div className="which-year">
                <label className='year'>
                    <input type="radio" name='select-year' onChange={handleCheck} value={checkyear.first_year} />
                    <span className='name'>First-year</span>
                </label>
                <label className='year'>
                    <input type="radio" name='select-year' onChange={handleCheck} value={checkyear.second_year} />
                    <span className='name'>Second-year</span>
                </label>
                <label className='year'>
                    <input type="radio" name='select-year' onChange={handleCheck} value={checkyear.third_year} />
                    <span className='name'>Third-year</span>
                </label>
                <label className='year'>
                    <input type="radio" name='select-year' onChange={handleCheck} value={checkyear.final_year} />
                    <span className='name'>Final-year</span>
                </label>
            </div>
            <div className='no-of-students'>
                <input name='students' type='text' min='1' onChange={change} value={temp} />
                <label>Number of students</label>
            </div>
            <div className='rollnumbtn'>
                {nbrofbuttons.map((singlebtn, index) => (
                    <button key={index} className={'rollno ' + (singlebtn.btn)} name='btn' type='submit' onClick={(e) => change_button_color(e, index)} >{index + 1}</button>
                ))}
            </div>
            <div className='generate-rollno'>
                <button className='submitbtn' type='submit' onClick={update_nos}>generate</button>
                {/* <button className='submitbtn' type='submit' onClick={calculate_attendance}>calculate</button> */}
                <button className='submitbtn' type='submit' onClick={sendData} >send</button>
            </div>
            {/* <h2>{iterator}</h2> */}
        </div>
    )
}
