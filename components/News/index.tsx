import Image, { StaticImageData } from "next/image";
import { Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

import styles from "./styles.module.scss";

const NewsComponent: React.FC = () => {
  return (
    <Container className={styles.newsContainer}>
      <Row>
        <h2 className="title-header">SẢN PHẨM CỦA HHG</h2>
      </Row>

      <Row className={styles.newsRow}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </Row>
    </Container>
  );
};
export default NewsComponent;
