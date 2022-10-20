import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';
import dataJson from './data.json';

export default function Recruit() {
    return (
        <Container className={styles.recurit}>
            <h2 className="title-header">TUYỂN DỤNG</h2>
            <Row className={styles.parentContent}>
                {
                    dataJson.recruit.map((value, index) => (
                        <Col xs={12} className={styles.item} key={index}>
                            <div className={styles.image} style={{ backgroundImage: `url(${value.image})` }} />
                            <div>
                                <div className={styles.title}>{value.position}</div>
                                <div><b>Thời gian làm việc:</b> {value.time}</div>
                                <div><b>Địa chỉ làm việc:</b> {value.address}</div>
                                <div><b>Thu nhập:</b> {value.salary}</div>
                                <div><b>Mô tả công việc:</b> {value.describle}</div>
                                <div><b>Liện hệ tư vấn:</b> {value.telephone}</div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
