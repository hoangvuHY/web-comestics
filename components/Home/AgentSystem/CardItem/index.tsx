import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

import styles from './styles.module.scss';

interface ICardItemProps {
  title: string;
  description: string;
}

const CardItem: FC<ICardItemProps> = ({title, description}) => {
  return (
    <Row className={styles.cardItem}>
      <Col xs={2} className={styles.imageContent}>
        <div className={styles.image} />
      </Col>

      <Col xs={10} className={styles.productDescription}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>
          {description}
        </p>
      </Col>
    </Row>
  );
};

export default CardItem;
