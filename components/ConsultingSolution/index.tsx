import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'
import classNames from 'classnames';
import Image from 'next/image';

import styles from './styles.module.scss';
import data from './data.json'

const ConsultingSolutionComponent = () => {
  return (
    <Container className={styles.consultingSolutionContainer}>
      <Row>
        <h2 className="title-header">
          Giải pháp tư vấn
        </h2>
      </Row>

      {
        data.solutions.map((item: any, index: number) => (
          <Row key={index} className={styles.containRow}>
            {
              item.header && (
                <h2 key={`${item.header}_${index}`} className={classNames("title-header", styles.titleDetail)}>
                  {item.header}
                </h2>
              )
            }

            {
              item.description && (
                <p key={`${item.description}_${index}`} className={styles.detail}>
                  {item.description}
                </p>
              )
            }

            {
              item.imageLink && (
                <div key={`${item.imageDes}_${index}`} className={styles.image}>
                  <Image
                    src={item.imageLink}
                    alt="image avatar"
                    width="100%"
                    height="100%"
                  />
                  <p className={styles.imageDes}>
                    <em>
                      {item.imageDes}
                    </em>
                  </p>
                </div>
              )
            }
          </Row>
        ))
      }
    </Container>
  )
}

export default ConsultingSolutionComponent