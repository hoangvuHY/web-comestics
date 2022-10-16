import Image from 'next/image';
import React, { EventHandler, useState } from 'react'
import { Button, Container, Form, Row } from "react-bootstrap";

import styles from './styles.module.scss';

import data from './data.json';
import CardItem from './CardItem';
import { E_SORT_PRODUCTION } from '~/enum/production';
import { OptionCountProduction, sortFilterArrays } from '~/constants/productions';

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
  const [activeFilter, setActiveFilter] = useState(sortFilterArrays[1].value);
  const [selectOption, setSelectOption] = useState(5);

  const dataProduction: IProductionData[] = JSON.parse(JSON.stringify(data.productions)).slice(0, selectOption);

  const [productionData, setProductionData] = useState<IProductionData[]>(dataProduction);

  const handleChangeSelectPage = (event: any) => {
    setSelectOption(event.target.value)
  }

  const handleFilterWithItem = (item: any) => {
    switch (item) {
      case 'NEWEST':
        const filterNewestData = dataProduction.filter(production => production.isNewest);
        setProductionData([...filterNewestData]);
        break;

      case 'BEST_SELL':
        setProductionData([...dataProduction]);
        break;

      case 'LOW_TO_HIGH':
        const filterLowToHighData = dataProduction
          .sort(
            (firstNumber, secondNumber) => firstNumber.priceSell - secondNumber.priceSell
          );

        setProductionData([...filterLowToHighData]);
        break;

      case 'HIGH_TO_LOW':
        const filterHighToLowData = dataProduction
          .sort(
            (firstNumber, secondNumber) => (secondNumber.priceSell - firstNumber.priceSell)
          );

        setProductionData([...filterHighToLowData]);
        break;

      default:
    }
  }

  const handleActiveFilter = (item: any) => {
    setActiveFilter(item.value);
    handleFilterWithItem(item.key)
  };

  return (
    <Container className={styles.productionContainer}>
      <Row>
        <h2 className="title-header">SẢN PHẨM CỦA HHG</h2>
      </Row>

      <Row className={styles.filterRow}>
        <div className={styles.filterContain}>
          <div className={styles.filter}>
            <div className={styles.title}>Sắp xếp</div>
            {
              sortFilterArrays.map((item: any) => (
                <Button
                  key={item.key}
                  className={
                    `${styles.buttonFilter} ${item.value === activeFilter && `${styles.active}`}`
                  }
                  onClick={() => handleActiveFilter(item)}
                >
                  {item.value}
                </Button>
              ))
            }
          </div>

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
    </Container>
  )
}

export default ProductionComponent;
