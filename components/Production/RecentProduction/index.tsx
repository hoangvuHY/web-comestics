import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import styles from "./styles.module.scss";
import data from "../data.json";
import CardItem from "./CardItem";

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
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 500,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: false,
        infinite: true,
      },
    },
  ],
};

const RecentProduction: FC = () => {
  return (
    <Container>
      <Row className={styles.recentProductions}>
        <h2 className="title-header">GỢI Ý DÀNH RIÊNG CHO BẠN</h2>

        <Slider className={styles.slider} {...settings}>
          {data.productions.map((item) => (
            <CardItem key={item.key} production={item} />
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default RecentProduction;
