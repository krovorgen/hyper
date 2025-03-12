import { FC } from 'react';

import heroImgDesktop from '../../../assets/images/pages/Home/Hero/bg-desktop.png';
import cn from 'classnames';

import styles from './Hero.module.scss';
import { MediaplanButton } from '../../../components/MediaplanButton/MediaplanButton.tsx';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={cn('container', styles.container)}>
        <div className={styles.inner}>
          <div className={styles.block}>
            <h1 className={styles.title}>
              Запустите <mark>мобильную рекламу</mark> с любым таргетингом
            </h1>
            <ul className={styles.items}>
              <li className={styles.item} style={{ maxWidth: 182 }}>
                <mark>90 млн</mark> уникальных пользователей
              </li>
              <li className={styles.item} style={{ maxWidth: 148 }}>
                Предиктивные <mark>ML-алгоритмы</mark>
              </li>
              <li className={styles.item} style={{ maxWidth: 136 }}>
                Собственное <mark>DMP</mark>
              </li>
            </ul>
            <MediaplanButton classButton={styles.btn} textButton="Получить медиаплан" />
          </div>
          <div className={styles.wrap}>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <h3 className={styles.subtitle}>12</h3>
                <p className={styles.text}>Активных компаний</p>
              </li>
              <li className={styles.element}>
                <h3 className={styles.subtitle}>132 572</h3>
                <p className={styles.text}>Показов сегодня</p>
              </li>
              <li className={styles.element}>
                <h3 className={styles.subtitle}>95,023</h3>
                <p className={styles.text}>Кликов сегодня</p>
              </li>
              <li className={styles.element}>
                <h3 className={styles.subtitle}>$32.8</h3>
                <p className={styles.text}>Затраты</p>
              </li>
              <li className={styles.element}>
                <h3 className={styles.subtitle}>$15,000</h3>
                <p className={styles.text}>CPM</p>
              </li>
            </ul>
            <img className={cn(styles.img)} src={heroImgDesktop} width={897} height="auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
