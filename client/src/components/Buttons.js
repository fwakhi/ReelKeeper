import React from "react";


const Buttons = (props) => {
    return (
        <>
        {props.movies?.map((movie, _) =>
                <div className="m-auto mb-2">
                    <button className="btn  addListButton"><i class="fa-solid fa-plus" style={{ color: "#8a8a8a;" }}></i></button>
                    <button className="btn  favButton" onClick={() => props.handleFavouritesClick(movie)}><i className="fa-regular fa-heart" style={{ color: "#8a8a8a;" }}></i></button>
                    <button className="btn  watchedButton"><i className="fa-solid fa-eye" style={{ color: "#8a8a8a;" }}></i></button>
                    <button className="btn  watchlistButton"><i class="fa-regular fa-clock" style={{ color: "#8a8a8a;" }}></i></button>
                </div>
            )
        }
        </>
    )
}
export default Buttons;

