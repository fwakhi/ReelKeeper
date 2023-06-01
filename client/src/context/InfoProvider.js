import React, { createContext, useState } from "react";

const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [history, setHistory] = useState([]);
    const [lists, setLists] = useState([]);
    const [moviesByList, setMoviesByList] = useState([]);

    return (
        <InfoContext.Provider value={{
            favorites, setFavorites,
            watchlist, setWatchlist,
            history, setHistory,
            lists, setLists,
            moviesByList, setMoviesByList
        }}>
            {children}
        </InfoContext.Provider>
    )
}
export default InfoContext;
