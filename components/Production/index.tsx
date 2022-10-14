import Image from 'next/image';
import React from 'react'
import { Button, Container, Form, Row } from "react-bootstrap";

import styles from './styles.module.scss';

const ProductionComponent = () => {
  return (
    <Container>
      <Row>
        <h2 className="title-header">SẢN PHẨM CỦA HHG</h2>
      </Row>

      <Row>
        <div className={styles.filter}>
          <div className={styles.title}>Sắp xếp</div>
          <Button className={styles.buttonFilter}>
            Mới nhất
          </Button>
          <Button className={styles.buttonFilter}>
            Bán chạy
          </Button>
          <Button className={styles.buttonFilter}>
            Giá thấp đến cao
          </Button>
          <Button className={styles.buttonFilter}>
            Giá cao đến thấp
          </Button>
        </div>

        <div className={styles.displayRecord}>
          <Form.Select aria-label="Default select example">
            <option value="20">20</option>
            <option value="40">40</option>
          </Form.Select>
        </div>
      </Row>

      <Row className={styles.productRow}>
        <div className={styles.productItem}>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image
                src="https://media.hasaki.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_t1McNQpC8jxcpLPk_img_380x380_64adc6_fit_center.png"
                alt="image avatar"
                width="100%"
                height="100%"
              />
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>148.000 đ</p>

              <div className={styles.right}>
                <p className={styles.originalPrice}>299.000 đ</p>
                <p className={styles.discount}>29%</p>
              </div>
            </div>
            <h6 className={styles.name}>
              L&#39;OREAL
            </h6>
            <p className={styles.content}>
              Nước Tẩy Trang L&#39;OREAL Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
            </p>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image
                src="https://media.hasaki.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_t1McNQpC8jxcpLPk_img_380x380_64adc6_fit_center.png"
                alt="image avatar"
                width="100%"
                height="100%"
              />
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>148.000 đ</p>

              <div className={styles.right}>
                <p className={styles.originalPrice}>299.000 đ</p>
                <p className={styles.discount}>29%</p>
              </div>
            </div>
            <h6 className={styles.name}>
              L&#39;OREAL
            </h6>
            <p className={styles.content}>
              Nước Tẩy Trang L&#39;OREAL Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
            </p>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image
                src="https://media.hasaki.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_t1McNQpC8jxcpLPk_img_380x380_64adc6_fit_center.png"
                alt="image avatar"
                width="100%"
                height="100%"
              />
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>148.000 đ</p>

              <div className={styles.right}>
                <p className={styles.originalPrice}>299.000 đ</p>
                <p className={styles.discount}>29%</p>
              </div>
            </div>
            <h6 className={styles.name}>
              L&#39;OREAL
            </h6>
            <p className={styles.content}>
              Nước Tẩy Trang L&#39;OREAL Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
            </p>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image
                src="https://media.hasaki.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_t1McNQpC8jxcpLPk_img_380x380_64adc6_fit_center.png"
                alt="image avatar"
                width="100%"
                height="100%"
              />
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>148.000 đ</p>

              <div className={styles.right}>
                <p className={styles.originalPrice}>299.000 đ</p>
                <p className={styles.discount}>29%</p>
              </div>
            </div>
            <h6 className={styles.name}>
              L&#39;OREAL
            </h6>
            <p className={styles.content}>
              Nước Tẩy Trang L&#39;OREAL Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
            </p>
          </div>
        </div>

        <div className={styles.productItem}>
          <div className={styles.cardItem}>
            <div className={styles.image}>
              <Image
                src="https://media.hasaki.vn/catalog/product/p/r/promotions-auto-nuoc-tay-trang-tuoi-mat-l-oreal-3-in-1-danh-cho-da-dau-da-hon-hop-400ml_t1McNQpC8jxcpLPk_img_380x380_64adc6_fit_center.png"
                alt="image avatar"
                width="100%"
                height="100%"
              />
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>148.000 đ</p>

              <div className={styles.right}>
                <p className={styles.originalPrice}>299.000 đ</p>
                <p className={styles.discount}>29%</p>
              </div>
            </div>
            <h6 className={styles.name}>
              L&#39;OREAL
            </h6>
            <p className={styles.content}>
              Nước Tẩy Trang L&#39;OREAL Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
            </p>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default ProductionComponent;
