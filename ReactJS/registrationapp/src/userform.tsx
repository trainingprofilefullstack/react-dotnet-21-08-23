
import './App.css'
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
interface User {
    name: string;
    age: number;
    skill: string;
    id: number;
    gender: GENDER
}

enum GENDER { MALE, FEMALE }
const URL = "http://localhost:5000/users/"
function Userform(props: any) {
    const [user, setUser] = useState<User>({ // local state files
        name: "Pariwesh",
        age: 42,
        skill: ".Net",
        id: -1,
        gender: GENDER.MALE
    })
    // let showModal = false
    // let selectedRecord: any = null
    const [showModal, setShowModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

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
            const promise = fetch(URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            promise.then((response) => {
                //response.json().then(data => console.log(data));
                response.json().then((savedUser: User) => {
                    setUsers([...users, savedUser])
                })
            });
            promise.catch(error => console.log(error));
        }
        catch (error) {
            console.error(error);
        }
    }


    async function deleteUser(id: any) {
        setShowModal(!showModal);
        setSelectedRecord(id);


        // const response = await fetch(URL + id , {
        //     method:'delete'
        // });
        // getUsers();

    }
    async function handleClose() {
        if(selectedRecord !=null) {
            const response = await fetch(URL + selectedRecord, {
                method: 'delete'
            });
        }
        
        getUsers();
        setShowModal(false);
        setSelectedRecord(null)
    }



    return (
        <div className='App'>

            <Modal show={showModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <h3>{props.title}</h3>
            <input name="name" value={user.name} onChange={updateValue} />
            <br></br>
            <br></br>
            <input name="age" value={user.age} onChange={updateValue} />
            <br></br>
            {/* <input name="skill" value={user.skill} onChange={updateValue} />  */}
            <br></br>
            <select name='skill' onChange={updateValue}>
                <option value=".Net">.Net</option>
                <option value="React JS" >React JS</option>
            </select>
            <input type='radio' name='gender' value="MALE" onChange={updateValue}/>Male
            <input type='radio' name='gender' value="FEMALE" onChange={updateValue}/>Female 
            <br></br>
            <br></br>
            <button onClick={save}>Save</button>

            <ol>
                {users.map((user) => {
                    return <li>{user.name} , {user.age}, {user.skill}

                        <Button onClick={() => deleteUser(user.id)}>X</Button>

                    </li>
                })}
            </ol>

        </div>
    )
}

// 1. create component student.tsx
// 2. in db.jsson create students arrayBuffer
// 3. perform create and read students operation

export default Userform