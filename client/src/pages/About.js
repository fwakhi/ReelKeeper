import React, { useEffect } from "react";
import MovieListHeading from "../components/MovieListHeading";


const About = () => {


    useEffect(() => {

    }, [])

    return (
        <>
            <div className="container" style={{ margin: "150px" }}>
                <div className="row">
                    <div className="col-3">
                        <img src="images/camara.png" style={{ width: "100%" }}></img>
                    </div>
                    <div className="col-9 mt-0">
                        <h2>About</h2>
                        <p>
                            <b>ReelKeeper</b> offers you an attractive, minimalist and intuitive website to manage the tracking of the films you have seen in the cinema or on your devices through any streaming platform. You can search for any movie by title, view the movie details such as year, original language, synopsis, genre/s, cast and crew, as well as recommendations of similar movies. You will also be able to add films to any of the three default lists (Favorites, Watchlist, History) or to any list the you create.
                        </p>
                        <p> As it is a SPA, the loading time is shorter as it avoids reloading every time the page is changed. Therefore, ReelKeeper offers a simple and attractive platform where you can organise your films quickly and efficiently.</p>
                        <p>This project was developed by Fatima Lobo using React and JS for her final project.</p>
                        <p>Hope you like it!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
