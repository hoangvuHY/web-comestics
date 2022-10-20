import React, { FC, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { sortFilterArrays } from '~/constants/productions';

interface IProductionItem {
  activeFilter: string;
  setActiveFilter: any;
  productionData: any;
  setProductionData: any;
}

const FilterItem: FC<IProductionItem> = ({ activeFilter, setActiveFilter, productionData, setProductionData }) => {
  useEffect(() => {
    handleActiveFilter(activeFilter);
  }, [activeFilter]);

  const handleFilterWithItem = (item: any) => {
    switch (item) {
      case sortFilterArrays[0]:
        const filterNewestData = productionData.filter((production: any) => production.isNewest);
        setProductionData([...filterNewestData]);
        break;

      case sortFilterArrays[1]:
        setProductionData([...productionData]);
        break;

      case sortFilterArrays[2]:
        const filterLowToHighData = productionData
          .sort(
            (firstNumber: any, secondNumber: any) => firstNumber.priceSell - secondNumber.priceSell
          );

        setProductionData([...filterLowToHighData]);
        break;

      case sortFilterArrays[3]:
        const filterHighToLowData = productionData
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