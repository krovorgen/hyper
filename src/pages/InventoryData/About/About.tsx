import { FC } from 'react';

import icon1 from '../../../assets/images/pages/InventoryData/About/1.svg';
import icon2 from '../../../assets/images/pages/InventoryData/About/2.svg';
import icon3 from '../../../assets/images/pages/InventoryData/About/3.svg';

import styles from './About.module.scss';

type Props = {};

export const About: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Hyper ID</h2>
        <p className={styles.descr}>Технология по определению профиля пользователя в мобильной среде</p>
        <ul className={styles.elements}>
          <li className={styles.element}>
            <div className={styles.img}>
              <img src={icon1} alt="" />
            </div>
            <h3 className={styles.subtitle}>Использование эмбедингов и иерархической кластеризации</h3>
            <p className={styles.text}>
              Эмбединги, основанные на текстовых признаках описаний и категорий приложений в апп-сторах. Кластеризация
              по принципу «соседей», присваивающему пользователям кластеры по косвенным признакам.
            </p>
          </li>
          <li className={styles.element}>
            <div className={styles.img}>
              <img src={icon2} alt="" />
            </div>
            <h3 className={styles.subtitle}>Использование бустинга для классификации</h3>
            <p className={styles.text}>
              Сегментация аудитории с использованием машинного обучения на основе данных об активности пользователей в
              мобильной среде.
            </p>
          </li>
          <li className={styles.element}>
            <div className={styles.img}>
              <img src={icon3} alt="" />
            </div>
            <h3 className={styles.subtitle}>Обогащение датасета из открытых источников</h3>
            <p className={styles.text}>
              Автоматическое определение социально-демографических профилей пользователей, на основе дополнительных
              данных из общедоступных баз, социальных сетей и сторов мобильных приложений.
            </p>
          </li>
        </ul>
        <p className={styles.solution}>
          Мы разработали решение, которое{' '}
          <mark>максимально точно определяет обезличенный профиль аудитории по соцдем признакам и интересам</mark>.
          Технология разработана в ответ на вводимые меры по ограничению передачи идентификаторов мобильных устройств и
          основывается на следующих алгоритмах:
        </p>
      </div>
    </div>
  );
};
