import { FC, useState } from 'react';

import bgImg from '../../../assets/images/pages/About/Hero/bg.png';
import play from '../../../assets/images/pages/About/Hero/play.svg';
import video from '../../../assets/video/about.mp4';

import styles from './Hero.module.scss';

type Props = {};

export const Hero: FC<Props> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.root}>
      <div className="container">
        <h1 className={styles.title}>
          Hyper AdTech — крупнейшая в России programmatic-платформа по размещению видеорекламы в мобильной среде.
        </h1>
        <p className={styles.descr}>
          По итогам 2021 года в рейтинге AdIndex Technology Index платформа Hyper AdTech заняла{' '}
          <mark>1-е место в категории «Сети мобильной видеорекламы»</mark> по качеству продукта и оказываемого сервиса.
        </p>
        <div className={styles.wrap}>
          {!isPlaying ? (
            <div className={styles.preview}>
              <img className={styles.img} width={689} height={428} src={bgImg} alt="" />
              <img
                className={styles.play}
                src={play}
                alt=""
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
              />
            </div>
          ) : (
            <div className={styles.video}>
              <video autoPlay controls muted playsInline controlsList="nodownload" width="100%" src={video}></video>
            </div>
          )}
        </div>
        <p className={styles.text}>
          Мы проводим эффективные рекламные кампании для крупнейших брендов в мобильной среде, с гарантией выполнения
          KPI. Охват аудитории платформы составляет более 90 млн. уникальных пользователей, по данным Mediascope.
        </p>
      </div>
    </div>
  );
};
