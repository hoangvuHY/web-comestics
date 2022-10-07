import Image from "next/image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

const Solution: FC = () => {
    return (
        <Container>
            <h2 className="title-header">GIẢI PHÁP TƯ VẤN</h2>
            <Row className={styles.solution}>
                <Col xs={12} md={8} className={styles.text}>
                    <div>Viện thẩm mỹ LIGI DOCTOR CLINIC là trung tâm thẩm mỹ và chăm sóc sắc đẹp hiện đại, với sứ mệnh cung cấp các dịch vụ chăm sóc sắc đẹp hàng đầu. Lấy chất lượng dịch vụ làm mục tiêu cốt lõi để tồn tại, Viện thẩm mỹ LIGI DOCTOR CLINCI luôn cam kết mang đến cho khách hàng công nghệ thẩm mỹ tiên tiến nhất, giúp người Việt có cơ hội sử dụng dịch vụ thẩm mỹ đạt chuẩn Hàn Quốc ngay tại Việt Nam. Sự hài lòng của bạn chính là mục tiêu mà chúng tôi luôn theo đuổi.</div>
                </Col>
                <Col xs={12} md={4}>
                    <div className={styles.image}>
                        <Image src="https://ligidoctorclinic.com/app/webroot/upload/admin/images/imageIntro.png" width="500px" height="500px" alt="image" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Solution;
