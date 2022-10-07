/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.scss';
import logo from "~/assets/image/logo.png";
import Image from 'next/image';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className={styles.header}>
        <Image src={logo} width="50px" height="50px" alt="Logo" />
        <div className={styles.sologan}>Thiên đường làm đẹp</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >GIỚI THIỆU</Nav.Link>
            <Nav.Link >DỊCH VỤ</Nav.Link>
            <Nav.Link >SẢN PHẨM</Nav.Link>
            <Nav.Link >GIẢI PHÁP</Nav.Link>
            <Nav.Link >HỆ THỐNG ĐẠI LÝ</Nav.Link>
            <Nav.Link >TIN TỨC</Nav.Link>
            <Nav.Link >TUYỂN DỤNG</Nav.Link>
            <Nav.Link >LIÊN HỆ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;