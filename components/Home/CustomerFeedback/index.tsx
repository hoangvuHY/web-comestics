import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import styles from "./styles.module.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const CustomerFeedback = () => {
  return (
    <div className={styles.customerFeedback}>
      <h2 className="title-header">Phản hồi của khách hàng</h2>

      <Container className={styles.contain}>
        <Row>
          <Slider {...settings}>
            <div className={styles.feedbackItem}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  alt="image avatar"
                  width="100%"
                  height="100%"
                />
              </div>

              <h5 className={styles.name}>Hoàng Văn A</h5>

              <div className={styles.feedback}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>

            <div className={styles.feedbackItem}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  alt="image avatar"
                  width="100%"
                  height="100%"
                />
              </div>

              <h5 className={styles.name}>Hoàng Văn A</h5>

              <div className={styles.feedback}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>

            <div className={styles.feedbackItem}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  alt="image avatar"
                  width="100%"
                  height="100%"
                />
              </div>

              <h5 className={styles.name}>Hoàng Văn A</h5>

              <div className={styles.feedback}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>

            <div className={styles.feedbackItem}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  alt="image avatar"
                  width="100%"
                  height="100%"
                />
              </div>

              <h5 className={styles.name}>Hoàng Văn A</h5>

              <div className={styles.feedback}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>

            <div className={styles.feedbackItem}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  alt="image avatar"
                  width="100%"
                  height="100%"
                />
              </div>

              <h5 className={styles.name}>Hoàng Văn A</h5>

              <div className={styles.feedback}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the took a galley of type and
                scrambled it to make a type specimen book.
              </div>
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerFeedback;
