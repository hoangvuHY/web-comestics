/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ligidoctorclinic.com/app/webroot/upload/admin/files/IMG%20BI%CC%80A%20cho%CC%A3nn.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ligidoctorclinic.com/app/webroot/upload/admin/files/IMG%20BI%CC%80A%20cho%CC%A3nn.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ligidoctorclinic.com/app/webroot/upload/admin/files/IMG%20BI%CC%80A%20cho%CC%A3nn.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
