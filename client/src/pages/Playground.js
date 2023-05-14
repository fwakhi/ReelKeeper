import React, { useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import axios from "axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import axios, { axiosPrivate } from "../api/axios";

const URL = 'http://localhost:8000/users/'

const Playground = () => {

    const [users, setUsers] = useState([]);
    const refresh = useRefreshToken()
    const axiosPrivate = useAxiosPrivate();
    // const navigate = useNavigate();
    // const location = useLocation();

    const { auth } = useAuth();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                console.log("Response", response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        let isMounted = true;
        const controller = new AbortController();

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    // useEffect(() => {
    //     getUsers();
    // }, []);



    // const getUsers = async () => {
    //     console.log("AUTH", auth)
    //     const res = await axios.get(URL)
    //     console.log(res.data);
    //     isMounted && setUsers(res.data)
    //     // try {
    //     //     const response = await fetch(URL);
    //     //     const data = await response.json();
    //     //     setUsers(data);
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    // };

    return (
        <>
            <div style={{ margin: "150px" }}>
                <h1>User List</h1>
                {
                    users?.length
                        ? (
                            <ul>
                                {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                            </ul>
                        ) : <p>No users to display</p>
                }
                <button onClick={() => refresh()}>refresh</button>
            </div>
        </>
    );
}
export default Playground;
