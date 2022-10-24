import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { toSlug } from '~/helpers';

import styles from './styles.module.scss';

interface IProductionData {
  key: number;
  name: string;
  imageLink: string;
  priceSell: number;
  originalPrice: number;
  discount: number;
  description: string;
  isNewest: boolean;
  isBestSell: boolean;
}

const CardItem: FC<{ production: IProductionData }> = ({ production }) => {
  const router = useRouter();
  const handleProductionDetail = () => router.push(`/san-pham/${toSlug(production.name)}`)

  return (
    <div onClick={handleProductionDetail} className={styles.productItem}>
      <div className={styles.cardItem}>
        <div className={styles.image}>
          <Image
            src={production.imageLink}
            alt="image avatar"
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.price}>
          <p className={styles.sellPrice}>{production.priceSell}</p>

          <div className={styles.right}>
            <p className={styles.originalPrice}>{production.originalPrice}</p>
            <p className={styles.discount}>{production.discount}%</p>
          </div>
        </div>
        <h6 className={styles.name}>
          {production.name}
        </h6>
        <p className={styles.content}>
          {production.description}
        </p>
      </div>
    </div>
  )
}

export default CardItem