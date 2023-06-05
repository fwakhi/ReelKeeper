import React from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/profile`)

    return (
        <div className="col-1 mt-2 ">
            <i className="fa-solid fa-circle-left fa-2xl ml-auto" style={{ color: '#1f1f1f' }} onClick={() => handleClick()}></i>
        </div>

    )
}
export default BackButton;
