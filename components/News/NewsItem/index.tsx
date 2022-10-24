import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi';
import NewsDetail from "~/components/News/NewsDetail";

import styles from "./styles.module.scss";

const NewsItem: React.FC<{ news: any }> = ({ news }) => {
  return (
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
        {news.title}
      </div>

      <div className={styles.viewMore}>
        <span>Xem thêm</span>
        <div className={styles.iconRight}><HiArrowNarrowRight /></div>
      </div>
    </div >
  );
};
export default NewsItem;
