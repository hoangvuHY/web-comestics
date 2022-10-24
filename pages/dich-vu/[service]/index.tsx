import React from 'react';
import { useRouter } from 'next/router';
import data from './data.json';
import { toSlug } from '~/helpers';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function Serice() {
    const router = useRouter();
    const title = router.query.service;
    const child: any = data.services.find((value) => toSlug(value.title) === title);
    return (
        <Container className={styles.serviceDetail}>
            <h2 className="title-header">{child.title}</h2>
            <div>
                {
                    child?.details.map((value: any, index: number) => (
                        <p key={index} className={styles.parent}>
                            <div className={styles.image} style={{ backgroundImage: `url(${value.image})` }}></div>
                            <div className={styles.text}>{value.text}</div>
                        </p>
                    ))
                }
            </div>
        </Container>
    )
}
