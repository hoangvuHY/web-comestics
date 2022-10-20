import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillEnvironment, AiFillPhone, AiFillFacebook, AiFillMail } from "react-icons/ai";
import styles from './styles.module.scss';


export default function Contact() {
    const [isPopup, setIsPopup] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        e.target.reset();
        setIsPopup(true);
    }
    return (
        <Container className={styles.contact}>
            <h2 className="title-header">THÔNG TIN LIÊN HỆ</h2>
            <Row>
                <Col xs={12} lg={6}>
                    <div className={styles.title}>HHG BEAUTY SALOON</div>
                    <div className={styles.name}>CÔNG TY CỔ PHẦN DỊCH VỤ CHĂM SÓC SỨC KHỎE VÀ SẮC ĐẸP HHG</div>
                    <div className={styles.child}>
                        <div><AiFillEnvironment /> Số 114, Xuân Thủy, Cầu Giấy, Hà Nội</div>
                        <div><AiFillPhone /> 0862248237</div>
                        <div><AiFillMail /> anhtuantb2422@gmail.com</div>
                        <div><AiFillFacebook /> https://www.facebook.com/daotaoligi</div>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8957752100678!2d105.7822928!3d21.0368559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454caaf9fa467%3A0x4cfd76cf514e1ce1!2zMTQ0IFh1w6JuIFRo4buneSwgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWk!5e0!3m2!1sen!2s!4v1666252549145!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
                </Col>
            </Row>
            <h2 className="title-header">TƯ VẤN MIỄN PHÍ</h2>
            <div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Họ và tên" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="telephone" name="telephone" placeholder="Số điện thoại" required />
                    <textarea required placeholder='Bạn thắc mắc điều gì?' name="description"></textarea>
                    <input type="submit" value="GỬI" className={styles.submit} />
                </form>

            </div>
            {
                isPopup && <div className={styles.notify}>
                    <div className={styles.child}>
                        <div className={styles.title}>THÔNG BÁO</div>
                        <div className={styles.content}>Đã gửi đi thắc mắc của bạn.</div>
                        <div className={styles.close}>
                            <span onClick={() => setIsPopup(false)}>Đóng</span>
                        </div>
                    </div>
                </div>
            }

        </Container>
    )
}
