import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  center?: boolean;
  block?: boolean;
  leftAddons?: ReactNode;
  rightAddons?: ReactNode;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    variant = 'primary',
    type = 'button',
    size = 'md',
    center,
    className,
    leftAddons,
    rightAddons,
    children,
    block,
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={cn(className, styles.btn, styles[size], styles[variant], {
        [styles.addonsLeft]: leftAddons && children,
        [styles.addonsRight]: rightAddons && children,
        [styles.addons]: (leftAddons || rightAddons) && !children,
        [styles.block]: block,
        [styles.center]: center,
      })}
      {...buttonProps}
    >
      {leftAddons ?? null}
      {children}
      {rightAddons ?? null}
    </button>
  );
};
