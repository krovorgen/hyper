import { FC } from 'react';

import icon1 from '../../../assets/images/pages/InventoryData/MobileApps/1.svg';
import icon2 from '../../../assets/images/pages/InventoryData/MobileApps/2.svg';
import icon3 from '../../../assets/images/pages/InventoryData/MobileApps/3.svg';
import icon4 from '../../../assets/images/pages/InventoryData/MobileApps/4.svg';
import icon5 from '../../../assets/images/pages/InventoryData/MobileApps/5.svg';
import icon6 from '../../../assets/images/pages/InventoryData/MobileApps/6.svg';

import styles from './MobileApps.module.scss';

type Props = {};

export const MobileApps: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ul className={styles.elements}>
          <li className={styles.element}>
            <img className={styles.img} src={icon1} alt="" />
            <p className={styles.text}>Игры</p>
          </li>
          <li className={styles.element}>
            <img className={styles.img} src={icon2} alt="" />
            <p className={styles.text}>Соцсети</p>
          </li>
          <li className={styles.element}>
            <img className={styles.img} src={icon3} alt="" />
            <p className={styles.text}>Здоровье</p>
          </li>
          <li className={styles.element}>
            <img className={styles.img} src={icon4} alt="" />
            <p className={styles.text}>Видео</p>
          </li>
          <li className={styles.element}>
            <img className={styles.img} src={icon5} alt="" />
            <p className={styles.text}>Образование</p>
          </li>
          <li className={styles.element}>
            <img className={styles.img} src={icon6} alt="" />
            <p className={styles.text}>Life style</p>
          </li>
        </ul>
        <div className={styles.inner}>
          <h2 className={styles.title}>500 000 мобильных приложений</h2>
          <p className={styles.descr}>
            Партнёры-поставщики мобильного трафика, открывают нам доступ к{' '}
            <mark>рекламному инвентарю сотен тысяч приложений</mark>
            различных категорий.
          </p>
        </div>
        <ul className={styles.items}>
          <li className={styles.item}>
            <p className={styles.count}>30 млн.</p>
            <p className={styles.text}>Уникальных пользователей</p>
          </li>
          <li className={styles.item}>
            <p className={styles.count}>25-44</p>
            <p className={styles.text}>Средний возраст основной аудитории</p>
          </li>
          <li className={styles.item}>
            <p className={styles.count}>85%</p>
            <p className={styles.text}>С доходом: средний и выше среднего</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
