import { FC, useState } from 'react';

import styles from './AdvertisingFormat.module.scss';
import cn from 'classnames';
import { useModalToggle } from '../../hooks/useModalToggle.ts';
import { MediaplanModal } from '../MediaplanModal/MediaplanModal.tsx';

type Props = {};

const content = [
  { id: 'tab1', label: 'Fullscreen video', src: 'https://creative-preview.cc/preview/14415337d5/' },
  { id: 'tab2', label: 'Playable Ad', src: 'https://creative-preview.cc/preview/2a8029ee70/' },
  { id: 'tab3', label: 'Fullscreen video', src: 'https://creative-preview.cc/preview/2a8029ee70/' },
  { id: 'tab4', label: 'Playable Ad', src: 'https://creative-preview.cc/preview/2a8029ee70/' },
  { id: 'tab5', label: 'Fullscreen video', src: 'https://creative-preview.cc/preview/2a8029ee70/' },
];

export const AdvertisingFormat: FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(content[0].id);
  const { isOpen: isMediaplanModalOpen, open: openMediaplanModal, close: closeMediaplanModal } = useModalToggle();

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={cn(styles.wrap, styles.wrapMobile)}>
          <h2 className={styles.title}>Работаем с форматами</h2>
          <p className={styles.text}>
            Hyper AdTech размещает полноэкранную видеорекламу в сотнях тысяч мобильных приложений, включая современные
            интерактивные форматыс высоким уровнем взаимодействия и вовлеченности
          </p>
        </div>
        <div className={styles.tabs}>
          {content.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.inner}>
          <div className={styles.iframe}>
            <iframe src={content.find((tab) => tab.id === activeTab)?.src}></iframe>
          </div>
          <div className={styles.content}>
            <div className={cn(styles.wrap, styles.wrapDesktop)}>
              <h2 className={styles.title}>Работаем с форматами</h2>
              <p className={styles.text}>
                Hyper AdTech размещает полноэкранную видеорекламу в сотнях тысяч мобильных приложений, включая
                современные интерактивные форматыс высоким уровнем взаимодействия и вовлеченности
              </p>
            </div>
            <ul className={styles.items}>
              <li className={styles.item}>
                <div
                  className={cn(styles.btn, activeTab === content[0].id && styles.btnActive)}
                  onClick={() => setActiveTab(content[0].id)}
                >
                  Fullscreen video
                </div>
                {activeTab === content[0].id && (
                  <div className={styles.box}>
                    <ul className={styles.elements}>
                      <li className={styles.element}>Межстраничный показ 75%+ VTR</li>
                      <li className={styles.element}>мотивированный показ за получение бонуса 90%+ VTR</li>
                      <li className={styles.element}>95%+ Viewability</li>
                      <li className={styles.element}>1%+ CTR</li>
                      <li className={styles.element}>Лучшая эффективность цены за 1000 показов</li>
                      <li className={styles.element}>Полноэкранный формат гарантирует высокую видимость</li>
                    </ul>
                    <button onClick={openMediaplanModal} className={styles.create}>
                      Разместить Fullscreen video рекламу
                    </button>
                  </div>
                )}
              </li>
              <li className={styles.item}>
                <div
                  className={cn(styles.btn, activeTab === content[1].id && styles.btnActive)}
                  onClick={() => setActiveTab(content[1].id)}
                >
                  Playable Ad
                </div>
                {activeTab === content[1].id && (
                  <div className={styles.box}>
                    <ul className={styles.elements}>
                      <li className={styles.element}>Межстраничный показ 75%+ VTR</li>
                      <li className={styles.element}>мотивированный показ за получение бонуса 90%+ VTR</li>
                      <li className={styles.element}>95%+ Viewability</li>
                      <li className={styles.element}>1%+ CTR</li>
                      <li className={styles.element}>Лучшая эффективность цены за 1000 показов</li>
                      <li className={styles.element}>Полноэкранный формат гарантирует высокую видимость</li>
                    </ul>
                    <button onClick={openMediaplanModal} className={styles.create}>
                      Разместить Fullscreen video рекламу
                    </button>
                  </div>
                )}
              </li>
              <li className={styles.item}>
                <div
                  className={cn(styles.btn, activeTab === content[2].id && styles.btnActive)}
                  onClick={() => setActiveTab(content[2].id)}
                >
                  Fullscreen video
                </div>
                {activeTab === content[2].id && (
                  <div className={styles.box}>
                    <ul className={styles.elements}>
                      <li className={styles.element}>Межстраничный показ 75%+ VTR</li>
                      <li className={styles.element}>мотивированный показ за получение бонуса 90%+ VTR</li>
                      <li className={styles.element}>95%+ Viewability</li>
                      <li className={styles.element}>1%+ CTR</li>
                      <li className={styles.element}>Лучшая эффективность цены за 1000 показов</li>
                      <li className={styles.element}>Полноэкранный формат гарантирует высокую видимость</li>
                    </ul>
                    <button onClick={openMediaplanModal} className={styles.create}>
                      Разместить Fullscreen video рекламу
                    </button>
                  </div>
                )}
              </li>
              <li className={styles.item}>
                <div
                  className={cn(styles.btn, activeTab === content[3].id && styles.btnActive)}
                  onClick={() => setActiveTab(content[3].id)}
                >
                  Playable Ad
                </div>
                {activeTab === content[3].id && (
                  <div className={styles.box}>
                    <ul className={styles.elements}>
                      <li className={styles.element}>Межстраничный показ 75%+ VTR</li>
                      <li className={styles.element}>мотивированный показ за получение бонуса 90%+ VTR</li>
                      <li className={styles.element}>95%+ Viewability</li>
                      <li className={styles.element}>1%+ CTR</li>
                      <li className={styles.element}>Лучшая эффективность цены за 1000 показов</li>
                      <li className={styles.element}>Полноэкранный формат гарантирует высокую видимость</li>
                    </ul>
                    <button onClick={openMediaplanModal} className={styles.create}>
                      Разместить Fullscreen video рекламу
                    </button>
                  </div>
                )}
              </li>
              <li className={styles.item}>
                <div
                  className={cn(styles.btn, activeTab === content[4].id && styles.btnActive)}
                  onClick={() => setActiveTab(content[4].id)}
                >
                  Fullscreen video
                </div>
                {activeTab === content[4].id && (
                  <div className={styles.box}>
                    <ul className={styles.elements}>
                      <li className={styles.element}>Межстраничный показ 75%+ VTR</li>
                      <li className={styles.element}>мотивированный показ за получение бонуса 90%+ VTR</li>
                      <li className={styles.element}>95%+ Viewability</li>
                      <li className={styles.element}>1%+ CTR</li>
                      <li className={styles.element}>Лучшая эффективность цены за 1000 показов</li>
                      <li className={styles.element}>Полноэкранный формат гарантирует высокую видимость</li>
                    </ul>
                    <button onClick={openMediaplanModal} className={styles.create}>
                      Разместить Fullscreen video рекламу
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isMediaplanModalOpen && <MediaplanModal onClose={closeMediaplanModal} />}
    </div>
  );
};
