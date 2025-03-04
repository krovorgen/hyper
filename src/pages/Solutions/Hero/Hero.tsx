import { FC } from 'react';

import styles from './Hero.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import heroImg from '../../../assets/images/pages/Solutions/Hero/bg.png';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Технологические решения Hyper AdTech</h1>
            <p className={styles.text}>
              Собственные технологии и поддерживаемые решения Hyper AdTech нацелены на отбор качественного рекламного
              инвентаря и анализ результативности кампаний
            </p>
            <Button className={styles.btn} variant="primary">
              Запустить кампанию
            </Button>
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={472} height={338} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
