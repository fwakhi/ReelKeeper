import React, { createContext, useState } from "react";

const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [history, setHistory] = useState([]);

    console.log("INFO--------", favorites)

    return (
        <InfoContext.Provider value={{ favorites, setFavorites, watchlist, setWatchlist, history, setHistory }}>
            {children}
        </InfoContext.Provider>
    )
}
export default InfoContext;
