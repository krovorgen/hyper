import { PropsWithChildren } from 'react';

import styles from './Title.module.scss';
import cn from 'classnames';

type TitleProps = {
  className: string;
  maxWidth?: number;
  centered?: boolean;
};

export const Title = ({ maxWidth, centered, children, className }: PropsWithChildren<TitleProps>) => {
  return (
    <h2
      className={cn(styles.title, className, { [styles.centered]: centered })}
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
    >
      {children}
    </h2>
  );
};
