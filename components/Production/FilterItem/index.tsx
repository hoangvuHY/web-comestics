import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { sortFilterArrays } from '~/constants/productions';

const FilterItem: FC<{ dataProductList: any; setProductionData: any }> = ({ dataProductList, setProductionData }) => {
  const [activeFilter, setActiveFilter] = useState(sortFilterArrays[1]);

  const handleFilterWithItem = (item: any) => {
    switch (item) {
      case 'NEWEST':
        const filterNewestData = dataProductList.filter((production: any) => production.isNewest);
        setProductionData([...filterNewestData]);
        break;

      case 'BEST_SELL':
        setProductionData([...dataProductList]);
        break;

      case 'LOW_TO_HIGH':
        const filterLowToHighData = dataProductList
          .sort(
            (firstNumber: any, secondNumber: any) => firstNumber.priceSell - secondNumber.priceSell
          );

        setProductionData([...filterLowToHighData]);
        break;

      case 'HIGH_TO_LOW':
        const filterHighToLowData = dataProductList
          .sort(
            (firstNumber: any, secondNumber: any) => (secondNumber.priceSell - firstNumber.priceSell)
          );

        setProductionData([...filterHighToLowData]);
        break;

      default:
    }
  }

  const handleActiveFilter = (item: any) => {
    setActiveFilter(item);
    handleFilterWithItem(item)
  };

  return (
    <div className={styles.filter}>
      <div className={styles.title}>Sắp xếp</div>
      {
        sortFilterArrays.map((item: any) => (
          <Button
            key={item}
            className={
              classNames(styles.buttonFilter, {
                [styles.active]: item === activeFilter
              })
            }
            onClick={() => handleActiveFilter(item)}
          >
            {item}
          </Button>
        ))
      }

      <div
        className={
          classNames(
            styles.filterResponsive,
          )
        }
      >
        <Form.Select
          value={activeFilter}
          onChange={(event: any) => handleActiveFilter(event.target.value)}
        >
          {
            sortFilterArrays.map((item: string) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))
          }
        </Form.Select>
      </div>
    </div>
  )
}

export default FilterItem