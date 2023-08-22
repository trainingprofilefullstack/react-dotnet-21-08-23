import { Console, log } from 'console';
import './App.css'
import React, { useState } from 'react'

interface User {
    name: string;
    age: number;
    skill: string
}


function Userform(props: any) {
    const [user, setUser] = useState<User>({ // local state files
        name: "",
        age: 0,
        skill: ""
    })

    function updateValue(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    async function save(event: any) {

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            console.log(response);
        } catch (error) {
            console.error(error);

        }

    }

    return (
        <div className='App'>
            <h3>{props.title}</h3>
            <input name="name" value={user.name} onChange={updateValue} />
            <input name="age" value={user.age} onChange={updateValue} />
            <input name="skill" value={user.skill} onChange={updateValue} />
            <button onClick={save}>Save</button>

        </div>
    )
}


export default Userform