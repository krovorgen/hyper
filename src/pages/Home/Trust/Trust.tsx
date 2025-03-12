import { FC } from 'react';

import tooltip from '../../../assets/icons/tooltip.svg';
import { Title } from '../../../components/Title/Title.tsx';
import styles from './Trust.module.scss';
import { v4 } from 'uuid';
import { Tooltip } from 'react-tooltip';

type Props = {};

const statsData: { id: string; value: string; label: string; maxWidth?: number; tooltipText: string }[] = [
  { id: v4(), value: '<1%', label: 'Fraud', tooltipText: '123' },
  { id: v4(), value: '70%+', label: 'Complete Rate', maxWidth: 66, tooltipText: '123' },
  { id: v4(), value: '4,5 млрд.', label: 'Рекламных запросов', maxWidth: 86, tooltipText: '123' },
  { id: v4(), value: '95%+', label: 'Viewability', tooltipText: '123' },
  { id: v4(), value: '4+', label: 'Оценка приложений', maxWidth: 89, tooltipText: '123' },
  { id: v4(), value: '90 млн.', label: 'Уникальных пользователей', maxWidth: 105, tooltipText: '123' },
  { id: v4(), value: '>1%', label: 'CTR', tooltipText: '123' },
  { id: v4(), value: '1500+', label: 'Параметров таргетинга', maxWidth: 85, tooltipText: '123' },
  { id: v4(), value: '1500+', label: '???', maxWidth: 85, tooltipText: '123' },
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
              {statsData.slice(0, 3).map((stat) => (
                <li className={styles.element} key={stat.id}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img
                      className={styles.tooltip}
                      src={tooltip}
                      width={16}
                      height={16}
                      data-tooltip-id={`tooltip-${stat.id}`}
                      alt="Тултип"
                    />
                    <Tooltip variant="info" id={`tooltip-${stat.id}`} place="right" className={styles.customTooltip}>
                      {stat.tooltipText}
                    </Tooltip>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              {statsData.slice(3, 6).map((stat) => (
                <li className={styles.element} key={stat.id}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img
                      className={styles.tooltip}
                      src={tooltip}
                      width={16}
                      height={16}
                      alt="Тултип"
                      data-tooltip-id={`tooltip-${stat.id}`}
                    />
                    <Tooltip variant="info" id={`tooltip-${stat.id}`} place="right" className={styles.customTooltip}>
                      {stat.tooltipText}
                    </Tooltip>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.item}>
            <ul className={styles.elements}>
              {statsData.slice(6, 9).map((stat) => (
                <li className={styles.element} key={stat.id}>
                  <h3 className={styles.count}>{stat.value}</h3>
                  <div className={styles.wrap}>
                    <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                      {stat.label}
                    </p>
                    <img
                      className={styles.tooltip}
                      src={tooltip}
                      width={16}
                      height={16}
                      alt="Тултип"
                      data-tooltip-id={`tooltip-${stat.id}`}
                    />
                    <Tooltip variant="info" id={`tooltip-${stat.id}`} place="right" className={styles.customTooltip}>
                      {stat.tooltipText}
                    </Tooltip>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <ul className={styles.mobileItems}>
          {statsData.map((stat) => (
            <li className={styles.mobileItem} key={stat.id}>
              <h3 className={styles.count}>{stat.value}</h3>
              <div className={styles.wrap}>
                <p className={styles.text} style={{ maxWidth: stat.maxWidth ?? undefined }}>
                  {stat.label}
                </p>
                <img
                  className={styles.tooltip}
                  src={tooltip}
                  width={16}
                  height={16}
                  alt="Тултип"
                  data-tooltip-id={`tooltip-${stat.id}`}
                />
                <Tooltip variant="info" id={`tooltip-${stat.id}`} place="right" className={styles.customTooltip}>
                  {stat.tooltipText}
                </Tooltip>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
