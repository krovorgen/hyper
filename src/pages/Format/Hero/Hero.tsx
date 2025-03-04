import { FC } from 'react';

import styles from './Hero.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import heroImg from '../../../assets/images/pages/Format/Hero/bg.png';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>
              <mark>Форматы</mark> рекламы
            </h1>
            <p className={styles.text}>
              <mark>Все рекламные форматы Hyper AdTech – fullscreen</mark>, т.е воспроизводятся на весь экран мобильного
              устройства с адаптацией под горизонтальную и вертикальную ориентацию мобильных приложений
            </p>
            <Button className={styles.btn} variant="primary">
              Запустить кампанию
            </Button>
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={549} height={338} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
