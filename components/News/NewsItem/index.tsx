import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi';

import styles from "./styles.module.scss";

const NewsItem: React.FC = () => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.cardItem}>
        <div className={styles.image}>
          <Image
            src="https://ligidoctorclinic.com/app/webroot/upload/admin/files/ligi.jpg"
            alt="image avatar"
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.title}>
          KHÁCH HÀNG NÓI NHƯ THẾ NÀO VỀ TINH CHẤT TRỊ ’VIÊM NANG LÔNG’ LIGI
        </div>

        <div className={styles.viewMore}>
          <span>Xem thêm</span>
          <div className={styles.iconRight}><HiArrowNarrowRight /></div>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
