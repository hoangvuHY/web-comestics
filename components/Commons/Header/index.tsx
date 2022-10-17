/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.scss';
import logo from "~/assets/image/logo.png";
import Image from 'next/image';
import React, { useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleOnMouseOverService = () => {
    document.getElementById('service-child')?.classList.add('d-flex');
  }
  const handleOnMouseOverServiceChild = () => {
    document.getElementById('service-child')?.classList.add('d-flex');
  }
  const handleOnMouseLeaveService = () => {
    document.getElementById('service-child')?.classList.remove('d-flex');
  }
  const handleOnMouseLeaveServiceChild = () => {
    document.getElementById('service-child')?.classList.remove('d-flex');
  }
  const handleOnClickFaBars = () => {
    document.getElementById('sticky-menu')?.classList.add('animation-to-left-right');
    document.getElementById('shadow')?.classList.add('d-block');
  }
  const handleCloseStickyMenu = () => {
    document.getElementById('sticky-menu')?.classList.remove('animation-to-left-right');
    document.getElementById('shadow')?.classList.remove('d-block');
    document.getElementById('service-child-2')?.classList.remove('d-block');
  }
  const handleClickShadow = () => {
    document.getElementById('sticky-menu')?.classList.remove('animation-to-left-right');
    document.getElementById('shadow')?.classList.remove('d-block');
    document.getElementById('service-child-2')?.classList.remove('d-block');
  }
  const handleOnClickService = () => {
    document.getElementById('service-child-2')?.classList.toggle('d-block');
  }
  return (
    <div className={styles.parentHeader}>
      <Container className={styles.header}>
        <Row>
          <Col xs={12} lg={4} className={`d-flex align-items-center p-1 ${styles.menuLeft}`}>
            <FaBars className={styles.fabars} onClick={handleOnClickFaBars} />
            <div className={styles.image}>
              <Image src={logo} width="70px" height="70px" alt="Logo" />
            </div>
            <div className={styles.sologan}>Thiên đường làm đẹp</div>
          </Col>
          <Col xs={12} lg={8} className={styles.menu}>
            <div>
              <span onClick={() => router.push('/gioi-thieu')}>GIỚI THIỆU</span>
              <span onMouseOver={handleOnMouseOverService} onMouseLeave={handleOnMouseLeaveService} className={styles.service}>DỊCH VỤ</span>
              <span>SẢN PHẨM</span>
              <span>GIẢI PHÁP</span>
              <span onClick={() => router.push('/he-thong-dai-ly')}>HỆ THỐNG ĐẠI LÝ</span>
              <span>TIN TỨC</span>
              <span>TUYỂN DỤNG</span>
              <span>LIÊN HỆ</span>
            </div>
          </Col>
        </Row>
        <div className={styles.serviceChild} id="service-child" onMouseOver={handleOnMouseOverServiceChild} onMouseLeave={handleOnMouseLeaveServiceChild}>
          <div>
            <div className={styles.title}>ĐIỀU TRỊ</div>
            <div className={styles.text}>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
            </div>
          </div>
          <div>
            <div className={styles.title}>ĐIỀU TRỊ</div>
            <div className={styles.text}>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
            </div>
          </div>
          <div>
            <div className={styles.title}>ĐIỀU TRỊ</div>
            <div className={styles.text}>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
            </div>
          </div>
        </div>
        <div className={styles.stickyMenu} id="sticky-menu">
          <div className={styles.faTimes}>
            <FaTimes className={styles.iconFaTimes} onClick={handleCloseStickyMenu} />
          </div>
          <div className={styles.itemMenu}>GIỚI THIỆU</div>
          <div className={`${styles.itemMenu} d-flex justify-content-between align-items-center`} onClick={handleOnClickService}>
            <span>DỊCH VỤ</span>
            <FaAngleDown className={styles.iconExpand} />
          </div>
          <div className={styles.serviceChild2} id="service-child-2">
            <div>
              <div className={styles.title}>ĐIỀU TRỊ</div>
              <div className={styles.serviceChild3}>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              </div>
            </div>
            <div>
              <div className={styles.title}>ĐIỀU TRỊ</div>
              <div className={styles.serviceChild3}>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              </div>
            </div>
            <div>
              <div className={styles.title}>ĐIỀU TRỊ</div>
              <div className={styles.serviceChild3}>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
                <div>ĐIỀU TRỊ VIÊM NANG LÔNG</div>
              </div>
            </div>
          </div>
          <div className={styles.itemMenu}>SẢN PHẨM</div>
          <div className={styles.itemMenu}>GIẢI PHÁP</div>
          <div className={styles.itemMenu}>HỆ THỐNG ĐẠI LÝ</div>
          <div className={styles.itemMenu}>TIN TỨC</div>
          <div className={styles.itemMenu}>TUYỂN DỤNG</div>
          <div className={styles.itemMenu}>LIÊN HỆ</div>
        </div>
        <div className={styles.shadow} id="shadow" onClick={handleClickShadow}>
        </div>
      </Container >
    </div>

  );
}

export default Header;