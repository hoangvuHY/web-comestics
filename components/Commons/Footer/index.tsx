import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./styles.module.scss";
import LogoImage from "~/assets/image/logo.png";
import FooterImage from "~/assets/image/footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerContain}>
          <Col xs={12} sm={2} className={styles.footerLogo}>
            <Image src={LogoImage} width="100%" height="100%" alt="logo hhg" />
          </Col>

          <Col className={styles.infoContact} xs={12} sm={6}>
            <b className={styles.infoCompany}>
              <p>THÔNG TIN LIÊN HỆ NỘI THẤT ART:</p>
              <p>Công ty TNHH Tư Vấn Thiết Kế và Xây Dựng NTA</p>
            </b>
            <p>
              <b>Địa chỉ:</b> 232 Đường số 8, P. Bình Hưng Hòa A, Quận Bình Tân,
              TP. HCM
            </p>
            <p>
              <b>Hotline:</b> 0908802348 (Mr. Trung)
            </p>
            <p>
              <b>Email:</b> info.noithatart@gmail.com
            </p>
          </Col>

          <Col xs={12} sm={4} className={styles.footerContact}>
            <div className={styles.iconsContact}>
              <a
                href="#"
                className={styles.icon}
                // target="_blank"
              >
                <BsFacebook />
              </a>

              <a
                href="#"
                className={styles.icon}
                // target="_blank"
              >
                <MdEmail />
              </a>

              <a
                href="#"
                className={styles.icon}
                // target="_blank"
              >
                <FaMapMarkerAlt />
              </a>
            </div>

            <div className={styles.footerContactIcon}>
              <Image src={FooterImage} alt="footer" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
