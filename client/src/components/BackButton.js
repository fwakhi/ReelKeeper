import React, { useContext, useEffect } from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/profile`)

    return (
        <div className="col-1 mt-2 ">
            <i class="fa-solid fa-circle-left fa-2xl ml-auto" style={{ color: '#8a8a8a;' }} onClick={() => handleClick()}></i>
        </div>

    )
}
export default BackButton;
