import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import dataIntroduction from "./data.json";
import IntroItem from "./IntroItem";

const Introduction: FC = () => {
    return (
        <Container>
            <h2 className="title-header">HHG SPA LÀ ĐỊA CHỈ LÀM ĐẸP UY TÍN TẠI VIỆT NAM</h2>
            <Row>
                {
                    dataIntroduction.introduction.map((value, index) =>
                    (
                        <Col xs={12} sm={6} md={3} key={index} className="mt-5 mt-lg-4 p-3">
                            <IntroItem background={value.background} icon={value.icon} text={value.text} />
                        </Col>
                    )
                    )
                }
            </Row>
        </Container>
    );
};

export default Introduction;
