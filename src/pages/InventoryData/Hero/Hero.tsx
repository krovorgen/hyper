import { FC } from 'react';

import styles from './Hero.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import heroImg from '../../../assets/images/pages/InventoryData/Hero/bg.png';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Широкий охват и точный таргетинг</h1>
            <p className={styles.text}>
              Интеграция Hyper AdTech с крупнейшими поставщиками мобильного инвентаря обеспечивает{' '}
              <mark>широкий охват аудитории</mark>. Большой спектр данных и современные технологические решение
              позволяют максимально точно таргетироваться на целевую аудиторию брендов.
            </p>
            <Button className={styles.btn} variant="primary">
              Запустить кампанию
            </Button>
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={481} height={344} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
