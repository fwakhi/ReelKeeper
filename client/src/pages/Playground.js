import React, { useState, useEffect } from "react";

import axios from 'axios'

const URL = 'http://localhost:8000/users/'

const Playground = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get(URL)
        setUsers(res.data)
        // try {
        //     const response = await fetch(URL);
        //     const data = await response.json();
        //     setUsers(data);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>
            <div style={{ margin: "150px" }}>
                <h1>User List</h1>
                {users.map(item => (
                    <h2>{item.name}</h2>
                    // <li key={item.id}>
                    //     <h2>{item.name}</h2>
                    //     <p>{item.email}</p>
                    // </li>
                ))}
            </div>
        </>
    );
}
export default Playground;
