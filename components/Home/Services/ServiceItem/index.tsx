import React, { FC, useEffect } from "react";
import styles from "./styles.module.scss";

interface ServiceItemProps {
    image: string;
    header: string;
    text: string;
    index: number;
}

const ServiceItem: FC<ServiceItemProps> = ({ image, header, text, index }) => {
    useEffect(() => {
        const item = document.getElementById(`service-item-${index}`);
        const handleMouseOver = () => {
            const mark = document.getElementById(`mark-${index}`);
            mark?.classList.add('display-mark');
        }
        const handleMouserLeave = () => {
            const mark = document.getElementById(`mark-${index}`);
            mark?.classList.remove('display-mark');
        }
        item?.addEventListener('mouseover', handleMouseOver, false);
        item?.addEventListener('mouseleave', handleMouserLeave, false);
    }, [index])
    return (
        <div className={styles.serviceItem} id={`service-item-${index}`}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={styles.header}>{header}</div>
            <div className={styles.text}>{text}</div>
            <div className={styles.mask} id={`mark-${index}`}>
                <div className={styles.view}>
                    Xem chi tiết
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
