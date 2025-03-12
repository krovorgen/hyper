import { forwardRef, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Checkbox.module.scss';

type RadioInputProps = {
  labelClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, RadioInputProps>((props, ref) => {
  const { labelClassName, children, ...otherProps } = props;

  return (
    <label className={cn(styles.container, labelClassName)}>
      <input ref={ref} className={styles.input} type="checkbox" {...otherProps} />
      <div className={cn(styles.mark)} />

      <span className={styles.label}>{children}</span>
    </label>
  );
});
