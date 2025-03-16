import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md';
    center?: boolean;
    block?: boolean;
    fullOnMobile?: boolean;
    leftAddons?: ReactNode;
    Component?: ElementType;
    rightAddons?: ReactNode;
  };

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    variant = 'primary',
    Component = 'button',
    type = 'button',
    size = 'md',
    fullOnMobile = true,
    center,
    className,
    leftAddons,
    rightAddons,
    children,
    block,
    ...buttonProps
  } = props;

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={cn(className, styles.btn, styles[size], styles[variant], {
        [styles.addonsLeft]: leftAddons && children,
        [styles.addonsRight]: rightAddons && children,
        [styles.addons]: (leftAddons || rightAddons) && !children,
        [styles.block]: block,
        [styles.center]: center,
        [styles.fullMobile]: fullOnMobile,
      })}
      {...buttonProps}
    >
      {leftAddons ?? null}
      {children}
      {rightAddons ?? null}
    </Component>
  );
};
