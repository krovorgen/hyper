import { FC } from 'react';

import styles from './Blockquote.module.scss';

type Props = {};

export const Blockquote: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <p className={styles.text}>
          Делаем так, чтобы <mark>вас заметили</mark>. Добиваемся перевыполнения плана — <mark>нас рекомендуют</mark>{' '}
          крупные бренды, такие как <mark>Tess и Нурофен</mark>
        </p>
      </div>
    </div>
  );
};
