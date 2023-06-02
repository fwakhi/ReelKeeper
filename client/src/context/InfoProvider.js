import React, { createContext, useState } from "react";

const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([]);

    return (
        <InfoContext.Provider value={{
            userInfo, setUserInfo
        }}>
            {children}
        </InfoContext.Provider>
    )
}
export default InfoContext;
