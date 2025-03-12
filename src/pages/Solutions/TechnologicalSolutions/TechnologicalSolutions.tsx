import { useState, useEffect, useRef, FC } from 'react';
import cn from 'classnames';
import styles from './TechnologicalSolutions.module.scss';
import icon1 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-1.svg';
import icon2 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-2.svg';
import icon3 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-3.svg';
import icon4 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-4.svg';
import icon5 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-5.svg';
import icon6 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/icon-6.svg';
import company1 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/company-1.png';
import company2 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/company-2.png';
import company3 from '../../../assets/images/pages/Solutions/TechnologicalSolutions/company-3.svg';
import { TechnologicalBlock } from './TechnologicalBlock/TechnologicalBlock.tsx';

// Enum для названий секций
enum Section {
  HyperPredict = 'Hyper Predict',
  Verification = 'Верификация',
  BrandSafety = 'Brand Safety',
  AnalyticsTools = 'Инструменты аналитики',
}

export const TechnologicalSolutions: FC = () => {
  const [activeTab, setActiveTab] = useState<Section>(Section.HyperPredict);

  const sectionRefs = {
    [Section.HyperPredict]: useRef<HTMLDivElement>(null),
    [Section.Verification]: useRef<HTMLDivElement>(null),
    [Section.BrandSafety]: useRef<HTMLDivElement>(null),
    [Section.AnalyticsTools]: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(key as Section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: Section) => {
    const sectionEl = sectionRefs[section].current;
    if (sectionEl) {
      const sectionPosition = sectionEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={cn(styles.inner)}>
        <div className="container">
          <div className={styles.navs}>
            {Object.values(Section).map((section) => (
              <button
                key={section}
                className={cn(styles.nav, { [styles.navActive]: activeTab === section })}
                onClick={() => handleNavClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.root}>
        <div className={cn('container', styles.container)}>
          <div className={styles.content}>
            <div ref={sectionRefs[Section.HyperPredict]} className={styles.contentBlock}>
              <h2 className={styles.title}>{Section.HyperPredict}</h2>
              <div className={styles.wrap}>
                <div className={styles.left}>
                  <h3 className={styles.subtitle}>
                    Система собственных предиктивных алгоритмов, цель которых обеспечить выполнение ключевых показателей
                    по&nbsp;качеству инвентаря, и&nbsp;результативности рекламных кампаний.
                  </h3>
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon1} width={31} height={36} alt="" />
                      </div>
                      <p className={styles.text}>ML-технология</p>
                    </li>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon2} width={32} height={36} alt="" />
                      </div>
                      <p className={styles.text}>Фильтрация трафика</p>
                    </li>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon3} width={31} height={36} alt="" />
                      </div>
                      <p className={styles.text}>Антифрод</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.right}>
                  <p>
                    В&nbsp;основе алгоритмов лежат{' '}
                    <b>данные о&nbsp;действиях пользователей, паттерне потреблении контента и&nbsp;взаимодействии</b>{' '}
                    с&nbsp;рекламными объявлениями.
                  </p>
                  <p>
                    ML-технология Hyper Predict позволяет предсказывать на&nbsp;pre-bid стадии (до&nbsp;показа рекламы)
                    качество будущего контакта пользователя с&nbsp;рекламой, с&nbsp;последующим исключением
                    неэффективного инвентаря и&nbsp;фрода
                  </p>
                  <p>
                    <b>Алгоритмы обучаются в&nbsp;перманентном режиме</b>, обогащаясь знаниями об&nbsp;инвентаре
                    и&nbsp;пользователях, что позволяет повышать точность предсказаний качества будущих рекламных
                    контактов.
                  </p>
                </div>
              </div>
            </div>
            <div ref={sectionRefs[Section.Verification]} className={styles.contentBlock}>
              <h2 className={styles.title}>{Section.Verification}</h2>
              <div className={styles.wrap}>
                <div className={styles.left}>
                  <h3 className={styles.subtitle} style={{ maxWidth: 430 }}>
                    Рекламный инвентарь Hyper AdTech поддерживает измерения всех основных независимых верификаторов.
                  </h3>
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <p className={styles.count}>95%+</p>
                      <p className={styles.text}>Valid & Viewable</p>
                    </li>
                    <li className={styles.item}>
                      <p className={styles.count}>70%+</p>
                      <p className={styles.text}>Complete Rate</p>
                    </li>
                    <li className={styles.item}>
                      <p className={styles.count}>{`<1%`}</p>
                      <p className={styles.text}>Fraud</p>
                    </li>
                  </ul>
                  <ul className={styles.companies}>
                    <li className={styles.company}>
                      <img src={company1} width={148} height={50} alt="" />
                    </li>
                    <li className={styles.company}>
                      <img src={company2} width={148} height={50} alt="" />
                    </li>
                    <li className={styles.company}>
                      <img src={company3} width={148} height={50} alt="" />
                    </li>
                  </ul>
                </div>
                <div className={styles.right}>
                  <p>
                    Hyper AdTech&nbsp;&mdash; <b>одна из&nbsp;первых российских in-app платформ</b>, которая внедрила
                    поддержку технологии измерения рекламного инвентаря по&nbsp;
                    <b>международному стандарту MRC&nbsp;&mdash; Open Measurement SDK (OM&nbsp;SDK)</b>.
                  </p>
                  <p>
                    Мы&nbsp;сотрудничаем как с&nbsp;международным верификаторами осуществляющих измерения мобильного
                    инвентаря на&nbsp;базе технологии OM&nbsp;SDK, так и&nbsp;с&nbsp;локальными компаниями на&nbsp;базе
                    технологии MRAID. Измерения включают в&nbsp;себя аудит по&nbsp;таким метрикам как:
                    Viewability&nbsp;&mdash; время нахождения и&nbsp;площадь креатива в&nbsp;видимой зоне, Brand
                    safety&nbsp;&mdash; анализ взаимодействия пользователя с&nbsp;контентом и&nbsp;его окружения,
                    Complete Rate&nbsp;&mdash; досмотр рекламного объявления до&nbsp;100%, Fraud (SIVT,
                    GIVT)&nbsp;&mdash; уровень invalid-трафика и&nbsp;другие.
                  </p>
                </div>
              </div>
            </div>
            <div ref={sectionRefs[Section.BrandSafety]} className={styles.contentBlock}>
              <h2 className={styles.title}>{Section.BrandSafety}</h2>
              <div className={styles.wrap}>
                <div className={styles.left}>
                  <h3 className={cn(styles.subtitle, styles.subtitleMb48)} style={{ maxWidth: 445 }}>
                    Обеспечиваем защиту репутации брендов от&nbsp;негативного, сомнительного и&nbsp;неподобающего
                    контента при размещении рекламы в&nbsp;мобильной среде.
                  </h3>
                  <ul className={styles.items}>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon4} width={32} height={32} alt="" />
                      </div>
                      <p className={styles.text}>
                        Оценка
                        <br />
                        приложений
                      </p>
                    </li>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon5} width={32} height={32} alt="" />
                      </div>
                      <p className={styles.text}>Реклама только со&nbsp;звуком</p>
                    </li>
                    <li className={styles.item}>
                      <div className={styles.img}>
                        <img src={icon6} width={32} height={32} alt="" />
                      </div>
                      <p className={styles.text}>Безопасно для&nbsp;бренда</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.right}>
                  <p>
                    Базовый гарант соответствия критериям по&nbsp;Brand Safety&nbsp;&mdash; прохождение приложениями
                    модерации апп-сторов (Google Play и&nbsp;App Store).{' '}
                    <b>Модерация сторов происходит в&nbsp;перманентном режиме</b> и&nbsp;обеспечивает соблюдение политик
                    апп-сторов на&nbsp;всем пути существования приложения.
                  </p>
                  <p>
                    В&nbsp;Hyper AdTech <b>разработана специальная система фильтрации мобильных приложений</b>:
                    визуальная проверка названий и&nbsp;описаний по&nbsp;словам &laquo;маскам&raquo;, блэклистинг
                    приложений со&nbsp;стоп-словами на&nbsp;базе &laquo;масок&raquo;, разметка категорий
                    и&nbsp;таргетинг по&nbsp;тематикам, ограничение по&nbsp;возрастным ограничениям приложений.
                  </p>
                </div>
              </div>
            </div>
            <div ref={sectionRefs[Section.AnalyticsTools]} className={styles.contentBlock}>
              <h2 className={styles.title}>{Section.AnalyticsTools}</h2>
              <div className={styles.notification}>
                <p>
                  В&nbsp;рамках платформы Hyper AdTech реализованы инструменты оценки эффективности рекламных кампаний и
                  возможность трекинга ведущими системами аналитики мобильного инвентаря.
                </p>
              </div>
              <TechnologicalBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
