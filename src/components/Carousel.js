import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
    useEffect(() => {
        $('.carousel').carousel();
    }, []);

    return (
        <div className="carousel slide tam" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/op.jpg" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="images/werwer.jpg" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="images/el-castillo-ambulante.jpg" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
