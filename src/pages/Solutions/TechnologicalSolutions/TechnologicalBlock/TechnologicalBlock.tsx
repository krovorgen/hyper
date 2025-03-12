import { FC } from 'react';
import company from '../../../../assets/images/pages/Solutions/TechnologicalSolutions/companies.png';

import styles from './TechnologicalBlock.module.scss';
import cn from 'classnames';

type Props = {};

export const TechnologicalBlock: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.wrap, styles.wrapCenter)}>
        <div className={styles.left}>
          <h3 className={styles.title}>Аналитика кампаний в мобильном среде</h3>
          <p className={styles.text} style={{ maxWidth: 453 }}>
            Hyper AdTech поддерживает трекинг всех основных платформ аналитики мобильного инвентаря, что дает
            возможность прозрачно оценивать результативность рекламных кампаний.
          </p>
        </div>
        <div className={styles.right}>
          <img src={company} width={340} alt="" />
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>Оценка эффективности медийных кампаний</h3>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <h4 className={styles.subtitle}>Brand Lift</h4>
            <p className={styles.text} style={{ maxWidth: 590 }}>
              <b>Онлайн-опрос пользователей</b>, которые видели рекламное объявление бренда и не видели его, но
              соответствуют условиям таргетинга. Данный инструмент позволяет оценить эффективность кампаний по основным
              бренд-метрикам: Ad Recall; Ad Message Recall; Brand Awareness; Product Consideration; Brand Favorability;
              Purchase Intent; Brand Interest.
            </p>
          </div>
          <div className={styles.right}>
            <h4 className={styles.subtitle}>Sales UpLift</h4>
            <p className={styles.text} style={{ maxWidth: 494 }}>
              Инструмент позволяющий <b>оценить влияния рекламы в мобильной среде на реальные продажи</b>. По данному
              направлению мы сотрудничаем с ведущими исследовательскими компаниями и с компаниями в области работы с
              данными. Используются такие способы оценки эффективности как: O2O-исследования и Маркет-тесты.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
