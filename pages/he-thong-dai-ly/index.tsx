import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';
import { AiTwotoneEnvironment, AiFillPhone } from "react-icons/ai";
import data from './data.json';
export default function Introduction() {
    return (
        <Container className={styles.systemStore}>
            <h2 className="title-header">CHUỖI HỆ THỐNG THẨM MỸ VIỆN DOCTOR LIGI CLINIC</h2>
            <Row>
                {
                    data.agentSystem.map((value, index) => (
                        <Col xs={12} lg={4} className='p-3' key={index}>
                            <div className={styles.image} style={{ backgroundImage: `url(${value.image})` }} >
                                <div>
                                    <div>Hệ thống tại</div>
                                    <div>{value.province}</div>
                                </div>
                            </div>
                            <div className={styles.address}><AiTwotoneEnvironment /> {value.address}</div>
                            <div className={styles.telephone}><AiFillPhone /> {value.telephone}</div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
