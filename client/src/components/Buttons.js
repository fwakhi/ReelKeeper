import React from "react";
import AddFavourites from "./AddFavourites";
import HistoryButton from "./HistoryButton";
import WatchlistButton from "./WatchlistButton";
import ListButton from "./ListButton";
import { Row } from 'react-bootstrap';


const Buttons = (props) => {
    return (
        <div className="container mt-3">
            <Row className="justify-content-center">
                <AddFavourites movie={props.movie} />
                <WatchlistButton movie={props.movie} />
                <HistoryButton movie={props.movie} />
                <ListButton movie={props.movie} />
            </Row>
        </div>
    )
}
export default Buttons;
