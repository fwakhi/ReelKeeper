import React from "react";
import { Col, InputGroup, Form } from 'react-bootstrap';


const SearchBox = (props) => {
    return (
        <Col sm={4}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Type to Search..."
                    aria-label="Type to Search"
                    aria-describedby="basic-addon2"
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    value={props.value}
                />
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup>
        </Col>
    )
}
export default SearchBox;
