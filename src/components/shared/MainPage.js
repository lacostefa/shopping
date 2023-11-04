import React from "react";

////Css
import "../../css/MainPage.scss";
///Icon
import smart from "../../icons/bazar.png";
import photo from "../../icons/rendering.avif";
import photos from "../../icons/Depositphotos.jpg";
import stylish from "../../icons/stylish.avif";

const MainPage = () => {
    return (
        <>
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner d-flex-inline">
                    <div
                        className="carousel-item active justify-content-center"
                        data-bs-interval="10000"
                    >
                        <img src={photo} className="d-flex w-51" alt="photo"/>
                    </div>
                    <div className="carousel-item
                         justify-content-center"
                         data-bs-interval="2000"
                    >
                        <img src={photos} className="d-flex w-51" alt="image"/>
                    </div>
                    <div className="carousel-item
                         justify-content-center"
                    >
                        <img src={stylish} className="d-flex w-51" alt="stylish"/>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <footer className="footer">
                <img src={smart} alt="i-s"/>
                <div className="smart">Smart
                    <span className="shop">ShOp</span>
                </div>
                <div className="width-hr">
                    <div className="d-flex">
                        <div className="flex-1 w_color">
                            <hr/>
                        </div>
                        <div>
                            <p className="p-go">Go up</p>
                        </div>
                        <div className="flex-1 w_color">
                            <hr/>
                        </div>
                    </div>
                    <span className="span-2023">
                    copyright © 2023. All Right Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default MainPage;
