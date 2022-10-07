import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./ServiceItem";
import styles from "./styles.module.scss";
import dataServices from './data.json';

const Services: FC = () => {
    return (
        <div className={styles.services}>
            <Container>
                <h2 className="title-header white-text">DỊCH VỤ NỔI BẬT</h2>
                <Row>
                    {
                        dataServices.services.map((value, index) => (
                            <Col xs={12} sm={6} md={3} key={index} className="mt-5 mt-lg-4">
                                <ServiceItem image={value.image} header={value.header} text={value.text} index={index} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;
