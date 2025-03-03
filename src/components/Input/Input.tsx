/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return <input className={cn(styles.input, className)} ref={ref} {...otherProps} />;
});
