import React, { FC } from "react";

import styles from "./styles.module.scss";

interface IIntroItemProps {
    background: string;
    icon: string;
    text: string
}

const IntroItem: FC<IIntroItemProps> = ({ background, icon, text }) => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.imageParent}>
                    <div className={styles.imageChild} style={{ backgroundImage: `url(${background})` }} />
                </div>
            </div>
            <div className={styles.title}>
                <div className={styles.iconParent}>
                    <div className={styles.iconChild} style={{ backgroundImage: `url(${icon})` }} />
                </div>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default IntroItem;
