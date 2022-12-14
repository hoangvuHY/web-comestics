/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.scss';
import logo from "~/assets/image/logo.png";
import Image from 'next/image';
import React, { useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";
import data from './data.json';
import { toSlug } from "~/helpers";

function Header() {
  const service = data.service;
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
  const handleLinkToPage = (page: string) => {
    handleCloseStickyMenu();
    router.push(page)
  }
  return (
    <div className={styles.parentHeader}>
      <Container className={styles.header}>
        <Row>
          <Col xs={12} lg={4} className={`d-flex align-items-center p-1 ${styles.menuLeft}`}>
            <FaBars className={styles.fabars} onClick={handleOnClickFaBars} />
            <div onClick={() => router.push('/')} className={styles.image}>
              <Image src={logo} width="70px" height="70px" alt="Logo" />
            </div>
            <div className={styles.sologan}>Thi??n ???????ng l??m ?????p</div>
          </Col>
          <Col xs={12} lg={8} className={styles.menu}>
            <div>
              <span onClick={() => router.push('/gioi-thieu')}>GI???I THI???U</span>
              <span onMouseOver={handleOnMouseOverService} onMouseLeave={handleOnMouseLeaveService} className={styles.service}>D???CH V???</span>
              <span onClick={() => router.push('/san-pham')}> S???N PH???M</span>
              <span onClick={() => router.push('/giai-phap-tu-van')}>GI???I PH??P</span>
              <span onClick={() => router.push('/he-thong-dai-ly')}>H??? TH???NG ?????I L??</span>
              <span onClick={() => router.push('/tin-tuc')}>TIN T???C</span>
              <span onClick={() => router.push('/tuyen-dung')}>TUY???N D???NG</span>
              <span onClick={() => router.push('/lien-he')}>LI??N H???</span>
            </div>
          </Col>
        </Row>
        <div className={styles.serviceChild} id="service-child" onMouseOver={handleOnMouseOverServiceChild} onMouseLeave={handleOnMouseLeaveServiceChild}>
          {
            service.map((value, index) => (
              <div key={index}>
                <div className={styles.title}>{value.title}</div>
                <div className={styles.text}>
                  {value.child.map((v, i) => (
                    <div key={i} onClick={() => router.push(`/dich-vu/${toSlug(v)}`)}>{v}</div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.stickyMenu} id="sticky-menu">
          <div className={styles.faTimes}>
            <FaTimes className={styles.iconFaTimes} onClick={handleCloseStickyMenu} />
          </div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/gioi-thieu')}>GI???I THI???U</div>
          <div className={`${styles.itemMenu} d-flex justify-content-between align-items-center`} onClick={handleOnClickService}>
            <span>D???CH V???</span>
            <FaAngleDown className={styles.iconExpand} />
          </div>
          <div className={styles.serviceChild2} id="service-child-2">
            {
              service.map((value, index) => (
                <div key={index}>
                  <div className={styles.title}>{value.title}</div>
                  <div className={styles.serviceChild3}>
                    {value.child.map((v, i) => (
                      <div key={i} onClick={() => router.push(`/dich-vu/${toSlug(v)}`)}>{v}</div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/san-pham')}>S???N PH???M</div>
          <div className={styles.itemMenu}>GI???I PH??P</div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/he-thong-dai-ly')}>H??? TH???NG ?????I L??</div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/tin-tuc')}>TIN T???C</div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/tuyen-dung')}>TUY???N D???NG</div>
          <div className={styles.itemMenu} onClick={() => handleLinkToPage('/lien-he')}>LI??N H???</div>
        </div>
        <div className={styles.shadow} id="shadow" onClick={handleClickShadow}>
        </div>
      </Container >
    </div >

  );
}

export default Header;