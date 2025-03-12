import { FC } from 'react';

import styles from './Hero.module.scss';
import heroImg from '../../../assets/images/pages/Format/Hero/bg.png';
import { MediaplanButton } from '../../../components/MediaplanButton/MediaplanButton.tsx';

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
            <MediaplanButton classButton={styles.btn} textButton="Запустить кампанию" />
          </div>
          <div className={styles.img}>
            <img src={heroImg} width={549} height={338} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
