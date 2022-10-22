import Image from 'next/image'
import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'

import styles from './styles.module.scss';

const ProductionDetail: FC<{ production: any }> = ({ production }) => {
  return (
    <Container className={styles.productionDetailContainer}>
      <Row>
        <div className={styles.productionDetail}>
          <div className={styles.image}>
            <Image
              src={production.imageLink}
              width="100%"
              height="100%"
              alt="image-production"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.title}>
              {production.name}
            </div>

            <div className={styles.price}>
              <p className={styles.sellPrice}>{production.priceSell} ₫ (Đã bao gồm VAT)</p>
              <p className={styles.originalPrice}>
                <span>
                  Giá thị trường: {production.originalPrice} ₫
                </span>
                <span> - </span>
                <span>
                  Khuyến mãi: {production.discount}%
                </span>
              </p>
            </div>

            <div className={styles.description}>
              <p className={styles.titleDes}>
                Mô tả
              </p>
              <span className={styles.contentDes}>
                {production.description}
              </span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default ProductionDetail