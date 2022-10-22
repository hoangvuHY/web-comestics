import { FC } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import styles from "./styles.module.scss";
import data from "./data.json";
import SliderItem from "./SliderItem";
import { useRouter } from "next/router";

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
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 375,
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

const NewsHomePage: FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Row className={styles.newsHome}>
        <h2 onClick={() => router.push('/tin-tuc')} className="title-header">TIN TỨC MỚI</h2>

        <p className={styles.description}>
          Chuyên mục cung cấp các thông tin về các sản phẩm làm đẹp máy móc
          trang thiết bị phục vụ cho lĩnh vực spa làm đẹp, thông tin về thị
          trường cập nhật liên tục mỗi ngày.
        </p>

        <Slider className={styles.slider} {...settings}>
          {data.news.map((item) => (
            <SliderItem key={item.title} slider={item} />
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default NewsHomePage;
