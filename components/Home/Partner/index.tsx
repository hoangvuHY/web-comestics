import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

const Partner: FC = () => {
  return (
    <Container>
      <Row className={styles.partner}>
        <h2 className="title-header">ĐỐI TÁC CỦA CHÚNG TÔI</h2>

        <p className={styles.description}>
          Các đối tác chiến lược đã sử dụng các sản phẩm dịch vụ do cty chúng
          tôi cung cấp từ năm 2018 đến nay.
        </p>

        <div className={styles.image} />
      </Row>
    </Container>
  );
};

export default Partner;
