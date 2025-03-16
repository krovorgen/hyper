import { FC } from 'react';

import icon1 from '../../../assets/images/pages/About/Awards/1.svg';
import icon2 from '../../../assets/images/pages/About/Awards/2.svg';
import icon3 from '../../../assets/images/pages/About/Awards/3.svg';
import icon4 from '../../../assets/images/pages/About/Awards/4.svg';

import styles from './Awards.module.scss';

type Props = {};

export const Awards: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h1 className={styles.title}>Награды говорят сами за себя</h1>
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={icon1} width={64} height={43} alt="" />
            </div>
            <h3 className={styles.subtitle}>Technology Index 2024</h3>
            <p className={styles.text} style={{ maxWidth: 384 }}>
              Hyper AdTech заняла 1-е место в категории «Управление размещением рекламы» по качеству продукта и
              оказываемого сервиса
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={icon2} width={64} height={43} alt="" />
            </div>
            <h3 className={styles.subtitle}>Technology Index 2023</h3>
            <p className={styles.text} style={{ maxWidth: 384 }}>
              Hyper AdTech заняла 2 место в рейтинге Technology Index 2023 в категории Сети мобильной видеорекламы (по
              качеству продукта и оказываемого сервиса)
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={icon3} width={64} height={43} alt="" />
            </div>
            <h3 className={styles.subtitle}>Technology Index 2021</h3>
            <p className={styles.text} style={{ maxWidth: 414 }}>
              Hyper AdTech заняла 1-е место в категории «Сети мобильной видеорекламы» по качеству продукта и
              оказываемого сервиса и вошла в топ-5 в категории «DSP».
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src={icon4} width={54} height={43} alt="" />
            </div>
            <h3 className={styles.subtitle}>Премия AdIndex Awards 2021</h3>
            <p className={styles.text} style={{ maxWidth: 436 }}>
              Hyper AdTech победитель в номинации «Прорыв года». Спецноминация присуждена за рост показателей в сегменте
              «Сети мобильной видеорекламы» и высокие оценки заказчиков в рейтинге Technology Index 2021.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
