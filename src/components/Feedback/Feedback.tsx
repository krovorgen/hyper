import { FC } from 'react';

import styles from './Feedback.module.scss';
import { Button } from '../Button/Button.tsx';

type Props = {
  title: string;
  maxWidth: number;
};

export const Feedback: FC<Props> = ({ title, maxWidth }) => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.text} style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}>
            {title}
          </p>
          <div className={styles.navs}>
            <Button variant="primary">Запустить кампанию</Button>
            <Button variant="secondary">Задать вопрос</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
