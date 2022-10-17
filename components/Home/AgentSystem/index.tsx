import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";
import CardItem from "./CardItem";

import dataAgentSystem from "./data.json";
import { useRouter } from "next/router";

const AgentSystem: FC = () => {
  const router = useRouter();
  return (
    <Container>
      <Row className={styles.agentSystem}>
        <h2 className="title-header" onClick={() => router.push('/he-thong-dai-ly')}>HỆ THỐNG ĐẠI LÝ</h2>

        <Col xs={12} md={6} className={styles.imageMachine}>
          <div className={styles.image} />
        </Col>
        <Col xs={12} md={6} className={styles.content}>
          {
            dataAgentSystem.agentSystem.map((item)=>(
              <CardItem 
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
  );
};

export default AgentSystem;
