import { FC } from 'react';

import icon1 from '../../../assets/images/pages/InventoryData/Segments/1.svg';
import icon2 from '../../../assets/images/pages/InventoryData/Segments/2.svg';
import icon3 from '../../../assets/images/pages/InventoryData/Segments/3.svg';
import icon4 from '../../../assets/images/pages/InventoryData/Segments/4.svg';
import icon5 from '../../../assets/images/pages/InventoryData/Segments/5.svg';
import icon6 from '../../../assets/images/pages/InventoryData/Segments/6.svg';
import icon7 from '../../../assets/images/pages/InventoryData/Segments/7.svg';
import icon8 from '../../../assets/images/pages/InventoryData/Segments/8.svg';
import icon9 from '../../../assets/images/pages/InventoryData/Segments/9.svg';
import icon10 from '../../../assets/images/pages/InventoryData/Segments/10.svg';

import styles from './Segments.module.scss';

type Props = {};

export const Segments: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Аудиторные сегменты</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Собственная DMP</h3>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <img className={styles.img} src={icon1} alt="" />
                <p className={styles.text}>Геолокация</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon2} alt="" />
                <p className={styles.text}>Категория приложений</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon3} alt="" />
                <p className={styles.text}>Мобильный оператор</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon4} alt="" />
                <p className={styles.text}>Операционная система</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon5} alt="" />
                <p className={styles.text}>Модель мобильного устройства</p>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Сторонние data-платформы</h3>
            <ul className={styles.elements}>
              <li className={styles.element}>
                <img className={styles.img} src={icon6} alt="" />
                <p className={styles.text}>Соцдем</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon7} alt="" />
                <p className={styles.text}>Лояльность покупки товаров/услуг</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon8} alt="" />
                <p className={styles.text}>Уровень дохода</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon9} alt="" />
                <p className={styles.text}>Интересы</p>
              </li>
              <li className={styles.element}>
                <img className={styles.img} src={icon10} alt="" />
                <p className={styles.text}>Семейное положение</p>
              </li>
            </ul>
          </li>
        </ul>
        <p className={styles.descr}>
          Формируем <mark>точные сегменты на базе широкого спектра данных</mark> и параметров мобильной аудитории.
          Собственная DMP и данные сторонних data-платформ позволяют строить сегменты для таргетинга на пересечении
          разнообразных параметров.
        </p>
      </div>
    </div>
  );
};
