import React, { useState, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import { imgUrl, fetchSingleMovie } from '../api/tmdb'


const Playground = () => {

    const movieId = "550"

    const [movie, setMovie] = useState([]);

    const { auth } = useAuth();

    const getMovieRequest = async (movieId) => {
        const response = await fetchSingleMovie(movieId);
        console.log(response.data)
        if (response.data) {
            setMovie(response.data)
        }
    }

    useEffect(() => {
        getMovieRequest(movieId);
    }, [movieId]);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         try {
    //             const response = await axiosPrivate.get('/users', {
    //                 signal: controller.signal
    //             });
    //             console.log("Response", response.data);
    //             isMounted && setUsers(response.data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }

    //     let isMounted = true;
    //     const controller = new AbortController();

    //     getUsers();

    //     return () => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // }, [])

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
                <h1>Movie</h1>
                {
                    <img src={imgUrl + movie.poster_path} alt="poster"></img>

                }
                {/* {
                    users?.length
                        ? (
                            <ul>
                                {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                            </ul>
                        ) : <p>No users to display</p>
                } */}
                {/* <button onClick={() => refresh()}>refresh</button> */}
            </div>
        </>
    );
}
export default Playground;
