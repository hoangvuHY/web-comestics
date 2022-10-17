import React, { useState } from 'react'
import { Container, Form, Row } from "react-bootstrap";

import styles from './styles.module.scss';

import data from './data.json';
import CardItem from './CardItem';
import { OptionCountProduction } from '~/constants/productions';
import FilterItem from './FilterItem';
import NewsHomePage from './NewsHomePage';

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

const ProductionComponent = () => {
  const [selectOption, setSelectOption] = useState(20);
  const dataProductList: IProductionData[] = JSON.parse(JSON.stringify(data.productions)).slice(0, selectOption);
  const [productionData, setProductionData] = useState<IProductionData[]>(dataProductList);

  const handleChangeSelectPage = (event: any) => {
    setSelectOption(event.target.value)
  }

  return (
    <Container className={styles.productionContainer}>
      <Row>
        <h2 className="title-header">SẢN PHẨM CỦA HHG</h2>
      </Row>

      <Row className={styles.filterRow}>
        <div className={styles.filterContain}>
          <FilterItem dataProductList={dataProductList} setProductionData={setProductionData} />

          <div className={styles.displayRecord}>
            <Form.Select value={selectOption} onChange={handleChangeSelectPage}>
              {
                OptionCountProduction.map(item => (
                  <option value={item.key} key={item.key}>
                    {item.value}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>
      </Row>

      <Row className={styles.productRow}>
        {
          productionData.map((production) => (
            <CardItem key={production.key} production={production} />
          ))
        }
      </Row>

      <Row>
        <NewsHomePage />
      </Row>
    </Container>
  )
}

export default ProductionComponent;
