import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import styles from "./styles.module.scss";
import data from "./data.json";
import SliderItem from "./SliderItem";


interface IArrowSliderProps {
    className?: string;
    onClick?: any;
}

const SampleNextArrow: FC<IArrowSliderProps> = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FaChevronRight />
        </div>
    );
};

const SamplePrevArrow: FC<IArrowSliderProps> = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FaChevronLeft />
        </div>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                speed: 500,
                dots: false,
                infinite: true,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                dots: false,
                infinite: true,
            },
        },
    ],
};

const Product: FC = () => {
    return (
        <Container>
            <Row className={styles.newsHome}>
                <h2 className="title-header">SẢN PHẨM</h2>
                <h4 className={styles.childHeader}>Mỹ phẩm</h4>
                <Slider className={styles.slider} {...settings}>
                    {data.products.map((item) => (
                        <SliderItem key={item.title} slider={item} />
                    ))}
                </Slider>
                <h4 className={styles.childHeader2}>Trang thiết bị</h4>
                <Slider className={styles.slider} {...settings}>
                    {data.machines.map((item) => (
                        <SliderItem key={item.title} slider={item} />
                    ))}
                </Slider>
            </Row>
        </Container>
    );
};

export default Product;
