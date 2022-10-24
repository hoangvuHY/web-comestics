import Image, { StaticImageData } from "next/image";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";

import newsData from './data.json';

import styles from "./styles.module.scss";
import NewsItem from "./NewsItem";
import { toSlug } from "~/helpers";

const NewsComponent: React.FC = () => {
  const router = useRouter();
  const handleDynamicRoute = (title: string) => router.push(`/tin-tuc/${toSlug(title)}`);

  return (
    <Container className={styles.newsContainer}>
      <Row>
        <h2 className="title-header">Tin Tức</h2>
      </Row>

      <Row className={styles.newsRow}>
        {
          newsData.newsDetail.map((news, index) => (
            <div key={index} className={styles.newsItem} onClick={() => handleDynamicRoute(news.title)}>
              <NewsItem news={news} />
            </div>
          ))
        }
      </Row>
    </Container>
  );
};

export default NewsComponent;
