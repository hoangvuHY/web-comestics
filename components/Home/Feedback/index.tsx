import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";

import styles from "./styles.module.scss";

const Feedback = () => {
  return (
    <div className={styles.feedbackContain}>
      <h2 className="title-header">Phản hồi của khách hàng</h2>

      <Container>
        <Row className={styles.feedbackRow}>
          <Col className={styles.contain}>
            <Col className={styles.header}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  width="100%"
                  height="100%"
                  alt="image"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Celia Almeda</div>
                <div className={styles.position}>CEO Mailcharm</div>
              </div>
            </Col>
            <Col>
              <div className={styles.feedbackContent}>
                <div className={styles.quoter}>
                  <ImQuotesLeft />
                </div>

                <span>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                  pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque
                  sit amet. Sed turpis tincidunt id aliquet risus feugiat in
                  ante metus.
                </span>
              </div>
            </Col>
          </Col>
          <Col className={styles.contain}>
            <Col className={styles.header}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  width="100%"
                  height="100%"
                  alt="image"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Celia Almeda</div>
                <div className={styles.position}>CEO Mailcharm</div>
              </div>
            </Col>
            <Col>
              <div className={styles.feedbackContent}>
                <div className={styles.quoter}>
                  <ImQuotesLeft />
                </div>

                <span>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                  pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque
                  sit amet. Sed turpis tincidunt id aliquet risus feugiat in
                  ante metus.
                </span>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className={styles.feedbackRow}>
          <Col className={styles.contain}>
            <Col className={styles.header}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  width="100%"
                  height="100%"
                  alt="image"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Celia Almeda</div>
                <div className={styles.position}>CEO Mailcharm</div>
              </div>
            </Col>
            <Col>
              <div className={styles.feedbackContent}>
                <div className={styles.quoter}>
                  <ImQuotesLeft />
                </div>

                <span>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                  pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque
                  sit amet. Sed turpis tincidunt id aliquet risus feugiat in
                  ante metus.
                </span>
              </div>
            </Col>
          </Col>
          <Col className={styles.contain}>
            <Col className={styles.header}>
              <div className={styles.avatar}>
                <Image
                  src="https://i.ibb.co/8x9xK4H/team.jpg"
                  width="100%"
                  height="100%"
                  alt="image"
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Celia Almeda</div>
                <div className={styles.position}>CEO Mailcharm</div>
              </div>
            </Col>
            <Col>
              <div className={styles.feedbackContent}>
                <div className={styles.quoter}>
                  <ImQuotesLeft />
                </div>

                <span>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                  pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque
                  sit amet. Sed turpis tincidunt id aliquet risus feugiat in
                  ante metus.
                </span>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
