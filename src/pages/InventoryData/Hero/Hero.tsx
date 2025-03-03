import { FC } from 'react';

import styles from './Hero.module.scss';

type Props = {};

export const Hero: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">Hero</div>
    </div>
  );
};
