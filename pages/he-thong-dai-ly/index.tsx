import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';
import { AiTwotoneEnvironment, AiFillPhone } from "react-icons/ai";
export default function Introduction() {
    return (
        <Container className={styles.systemStore}>
            <h2 className="title-header">CHUỖI HỆ THỐNG THẨM MỸ VIỆN DOCTOR LIGI CLINIC</h2>
            <Row>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
                <Col xs={12} lg={4} className='p-3'>
                    <div className={styles.image}>
                        <div>
                            <div>Hệ thống tại</div>
                            <div>HÀ NỘI</div>
                        </div>
                    </div>
                    <div className={styles.address}><AiTwotoneEnvironment /> 299 Kim Mã - Ba Đình - Hà Nội</div>
                    <div className={styles.telephone}><AiFillPhone /> 0862248237</div>
                </Col>
            </Row>
        </Container>
    )
}
