import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Pagination, Row } from "react-bootstrap";

import styles from './styles.module.scss';

import data from './data.json';
import CardItem from './CardItem';
import { OptionCountProduction, sortFilterArrays } from '~/constants/productions';
import FilterItem from './FilterItem';
import RecentProduction from './RecentProduction';
import ReactPaginate from 'react-paginate';

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectOption, setSelectOption] = useState(20);
  const dataProductList: IProductionData[] = JSON.parse(JSON.stringify(data.productions));
  const [productionData, setProductionData] = useState<IProductionData[]>(dataProductList.slice(0, selectOption));
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [activeFilter, setActiveFilter] = useState(sortFilterArrays[1]);

  useEffect(() => {
    const endOffset = itemOffset + selectOption;
    setPageCount(Math.ceil(dataProductList.length / selectOption));
    setProductionData(dataProductList.slice(itemOffset, endOffset));
  }, [itemOffset, selectOption]);

  useEffect(() => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollIntoView();
    }
  }, [productionData])

  const handleChangeSelectPage = (event: any) => {
    setSelectOption(event.target.value)
  }

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * selectOption) % dataProductList.length;

    setActiveFilter(sortFilterArrays[1]);
    setItemOffset(newOffset);
  };

  return (
    <Container ref={scrollRef} className={styles.productionContainer}>
      <Row>
        <h2 className="title-header">SẢN PHẨM CỦA HHG</h2>
      </Row>

      <Row className={styles.filterRow}>
        <div className={styles.filterContain}>
          <FilterItem activeFilter={activeFilter} setActiveFilter={setActiveFilter} productionData={productionData} setProductionData={setProductionData} />

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
        <ReactPaginate
          className={styles.paginationPage}
          breakLabel="..."
          nextLabel={null}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={null}
          renderOnZeroPageCount={undefined}
        />
      </Row>
      <Row>
        <RecentProduction />
      </Row>
    </Container>
  )
}

export default ProductionComponent;
