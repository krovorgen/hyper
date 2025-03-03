import { FC } from 'react';

import tooltip from '../../../assets/icons/tooltip.svg';
import { Title } from '../../../components/Title/Title.tsx';
import styles from './Trust.module.scss';

type Props = {};

const statsData: { value: string; label: string; maxWidth?: number }[] = [
  { value: '<1%', label: 'Fraud' },
  { value: '70%+', label: 'Complete Rate', maxWidth: 66 },
  { value: '4,5 млрд.', label: 'Рекламных запросов', maxWidth: 86 },
  { value: '95%+', label: 'Viewability' },
  { value: '4+', label: 'Оценка приложений', maxWidth: 89 },
  { value: '90 млн.', label: 'Уникальных пользователей', maxWidth: 105 },
  { value: '>1%', label: 'CTR' },
  { value: '1500+', label: 'Параметров таргетинга', maxWidth: 85 },
  { value: '1500+', label: '???', maxWidth: 85 },
];

export const Trust: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <Title maxWidth={560} className={styles.title}>
          Занимайтесь бизнесом, а <mark>рекламу доверьте нам</mark>
        </Title>
        <ul className={styles.items}>
          <li className={styles.item}>
            <ul className={styles.elements}>
              {statsData.slice(0, 3).map((stat, index) => (
                <li className={styles.element} key={index}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img className={styles.tooltip} src={tooltip} width={16} height={16} alt="Тултип" />
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              {statsData.slice(3, 6).map((stat, index) => (
                <li className={styles.element} key={index}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img className={styles.tooltip} src={tooltip} width={16} height={16} alt="Тултип" />
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              {statsData.slice(6, 9).map((stat, index) => (
                <li className={styles.element} key={index}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img className={styles.tooltip} src={tooltip} width={16} height={16} alt="Тултип" />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <ul className={styles.mobileItems}>
          {statsData.map((stat, index) => (
            <li className={styles.mobileItem} key={index}>
              <h3 className={styles.count}>{stat.value}</h3>
              <div className={styles.wrap}>
                <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                  {stat.label}
                </p>
                <img className={styles.tooltip} src={tooltip} width={16} height={16} alt="Тултип" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
