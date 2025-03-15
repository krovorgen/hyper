import { FC } from 'react';

import arrowTop from '../../../assets/images/pages/About/Steps/arrow-top.svg';
import arrowMiddle from '../../../assets/images/pages/About/Steps/arrow-middle.svg';
import arrowBottom from '../../../assets/images/pages/About/Steps/arrow-bottom.svg';
import arrowFooter from '../../../assets/images/pages/About/Steps/arrow-footer.svg';

import styles from './Steps.module.scss';
import cn from 'classnames';

type Props = {};

export const Steps: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          <img className={cn(styles.arrow, styles.arrowTop)} src={arrowTop} width={275} height={120} alt="Стрела" />
          <img
            className={cn(styles.arrow, styles.arrowMiddle)}
            src={arrowMiddle}
            width={317}
            height={158}
            alt="Стрела"
          />
          <img
            className={cn(styles.arrow, styles.arrowBottom)}
            src={arrowBottom}
            width={319}
            height={158}
            alt="Стрела"
          />
          <img
            className={cn(styles.arrow, styles.arrowFooter)}
            src={arrowFooter}
            width={274}
            height={174}
            alt="Стрела"
          />
          <li className={styles.item}>
            <p className={styles.title}>Предиктивные алгоритмы Hyper Predict</p>
            <p className={styles.text}>
              Алгоритмы Hyper Predict обеспечивают покупку качественного мобильного инвентаря у ведущих поставщиков.
              Качество подтверждается независимыми верификаторами по стандарту MRC
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.title}>Развитие и уникальные разработки</p>
            <p className={styles.text}>
              Hyper AdTech вносит вклад в рекламные технологии благодаря уникальным решениям и разработкам, обеспечивая
              уверенное развитие на современном рынке
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.title}>Формирование аудиторных сегментов</p>
            <p className={styles.text}>
              Собственная DMP и сторонние data-платформы Hyper AdTech формируют качественные аудитории, идентифицируя их
              по признакам и интересам без уникальных ID
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
