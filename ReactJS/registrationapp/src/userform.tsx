import { Console, error, log } from 'console';
import './App.css'
import React, { useEffect, useState } from 'react'

interface User {
    name: string;
    age: number;
    skill: string;
    id:number;
}

const URL = "http://localhost:5000/users"
function Userform(props: any) {
    const [user, setUser] = useState<User>({ // local state files
        name: "",
        age: 0,
        skill: "",
        id:1
    })
    const getUsers = async () => {
        try {
            const response = await fetch(URL);
            const users = await response.json();
            // second call
            await fetch('second api')
            setUsers(users);
        } catch (error) {
            console.log(error);
        }
    }

    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUsers();
    }, [])

    function updateValue(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    function save(event: any) {

       /* try {
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

        } */

        try {
            const promise =  fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            promise.then((response) => {
                 //response.json().then(data => console.log(data));
                 response.json().then((savedUser: User)  => {
                    setUsers([...users, savedUser])
                 })
            });
            promise.catch(error => console.log(error));
        }
        catch(error) {
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

            <ol>
                {users.map((user) => {
                    return <li>{user.name} , {user.age}, {user.skill}</li>
                })}
            </ol>

        </div>
    )
}


export default Userform