import { FC } from 'react';

import styles from './Hero.module.scss';
import { Button } from '../../../components/Button/Button.tsx';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className="inner">
          <div className={styles.wrap}>
            <h1 className={styles.title}>Форматы рекламы</h1>
            <p className={styles.text}>
              Все рекламные форматы Hyper AdTech – fullscreen, т.е воспроизводятся на весь экран мобильного устройства с
              адаптацией под горизонтальную и вертикальную ориентацию мобильных приложений
            </p>
            <Button className={styles.btn} variant="primary">
              Запустить кампанию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
