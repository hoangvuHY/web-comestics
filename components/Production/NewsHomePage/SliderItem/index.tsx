import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";

interface ISliderProps {
  slider: {
    title: string;
    image: string;
    description: string;
  };
}

const SliderItem: React.FC<ISliderProps> = ({ slider }) => {
  return (
    <div className={styles.sliderItem}>
      <div className={styles.image}>
        <Image
          src={slider.image}
          width="100%"
          height="100%"
          alt={slider.title}
        />
      </div>

      <div className={styles.content}>
        <h5 className={styles.title}>{slider.title}</h5>

        <p className={styles.detail}>{slider.description}</p>
      </div>
    </div>
  );
};

export default SliderItem;
