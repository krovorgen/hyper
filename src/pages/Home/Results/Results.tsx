import { FC, ReactNode } from 'react';

import styles from './Results.module.scss';
import cn from 'classnames';
import { Title } from '../../../components/Title/Title.tsx';
import { MediaplanButton } from '../../../components/MediaplanButton/MediaplanButton.tsx';

type Props = {};

type ResultItem = {
  title: string;
  subtitle: string;
  tasks: string[];
  stats: { title: string; text: string }[];
  results: { title: string; text: string | ReactNode }[];
  elements: { title: string; text: string; icon: string }[];
};

const resultsData: ResultItem[] = [
  {
    title: 'Кейс «Нурофен экспресс»',
    subtitle: 'Рост показателей запоминаемости рекламы бренда и намерение покупки',
    tasks: [
      'Провести имиджевую рекламную кампанию бренда «Нурофен Экспресс» в мобильных приложениях с форматом Rewarded Video',
      'Оценить прирост основных бренд-метрик с помощью Brand Lift исследования: запоминаемость рекламы бренда и намерение покупки',
    ],
    stats: [
      { title: 'Период', text: '1 месяц' },
      { title: 'Аудитория', text: '18 – 44' },
    ],
    results: [
      { title: '+50%', text: 'Запоминаемость рекламы бренда' },
      { title: '50%', text: 'Намерены купить (от аудитории)' },
    ],
    elements: [
      { title: 'Инструмент', text: 'Brand Lift исследование', icon: 'tools' },
      { title: 'Инвентарь', text: 'Мобильные приложения', icon: 'inventory' },
      { title: 'Формат', text: 'Rewarded Video', icon: 'gift' },
    ],
  },
  {
    title: '*по условиям рекламной кампании мы не можем раскрывать название бренда',
    subtitle: 'Эффективная частота и рост продаж',
    tasks: [
      'Провести MPA-тест на панели Nielsen (85 000 магазинов в РФ) в тестовом регионе с медиа поддержкой и сравнить с контрольным регионом без медиа поддержки',
      'Оценить прирост продаж при увеличении частоты рекламной кампании в in-app и замерить уровень ROAS',
    ],
    stats: [
      { title: 'Период', text: '2 месяца' },
      { title: 'Аудитория', text: '25 – 54' },
    ],
    results: [
      { title: 'X 2', text: 'рост продаж при F=9, относительно F=5' },
      { title: 'X 1.5', text: 'уровень ROAS (YoY)' },
    ],
    elements: [
      { title: 'Инструмент', text: 'MPA-тест на панели Nielsen', icon: 'tools' },
      { title: 'Инвентарь', text: 'Мобильные приложения', icon: 'inventory' },
      { title: 'Формат', text: 'Interstitial Video', icon: 'video' },
    ],
  },
  {
    title: 'Кейс «TESS»',
    subtitle: 'Вовлечение и удержание пользователей',
    tasks: [
      'Замерить вовлечение и удержание пользователей в формате Playable Ads на инвентаре мобильных приложений',
      'Оценить влияние игровой механики в рекламном креативе на основные бренд-метрики в сравнении с обычным форматом видеорекламы',
    ],
    stats: [
      { title: 'Период', text: '2 месяца' },
      { title: 'Аудитория', text: '25 – 35' },
    ],
    results: [
      { title: '+32%', text: 'Намерение покупки' },
      { title: '+69%', text: <>Запоминаемость рекламы&nbsp;бренда</> },
      { title: '28%', text: 'Engagement rate' },
      { title: '24 сек', text: 'Время контакта с брендом' },
    ],
    elements: [
      { title: 'Инструмент', text: 'Brand Lift исследование', icon: 'tools' },
      { title: 'Инвентарь', text: 'Мобильные приложения', icon: 'inventory' },
      { title: 'Формат', text: 'Playable Ads', icon: 'games' },
    ],
  },
];

export const Results: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <Title maxWidth={584} className={styles.title}>
          Наш успех — это когда <mark>ваша реклама</mark> приносит <mark>сверхрезультаты</mark>
        </Title>
        <ul className={styles.items}>
          {resultsData.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.left}>
                <h4 className={styles.pretitle}>{item.title}</h4>
                <h3 className={styles.subtitle}>{item.subtitle}</h3>
                <p className={styles.taskTitle}>Задача</p>
                <ul className={styles.tasks}>
                  {item.tasks.map((task, i) => (
                    <li key={i} className={styles.task}>
                      {task}
                    </li>
                  ))}
                </ul>
                <ul className={styles.stats}>
                  {item.stats.map((stat, i) => (
                    <li key={i} className={styles.stat}>
                      <p className={styles.statTitle}>{stat.title}</p>
                      <p className={styles.statText}>{stat.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.right}>
                <p className={styles.resultHead}>Результаты</p>
                <ul className={styles.results}>
                  {item.results.map((result, i) => (
                    <li key={i} className={styles.result}>
                      <p className={styles.resultTitle}>{result.title}</p>
                      <p className={styles.resultText}>{result.text}</p>
                    </li>
                  ))}
                </ul>
                <ul className={styles.elements}>
                  {item.elements.map((element, i) => (
                    <li key={i} className={cn(styles.element, styles[element.icon])}>
                      <p className={styles.elementTitle}>{element.title}</p>
                      <p className={styles.elementText}>{element.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <MediaplanButton classButton={styles.btn} isCenterButton textButton="Стать успешным кейсом" />
      </div>
    </div>
  );
};
