import { FC } from 'react';

import styles from './Hero.module.scss';
import heroImg from '../../../assets/images/pages/Solutions/Hero/bg.png';
import { MediaplanButton } from '../../../components/MediaplanButton/MediaplanButton.tsx';

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
            <MediaplanButton classButton={styles.btn} textButton="Запустить кампанию" />
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={472} height={338} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
