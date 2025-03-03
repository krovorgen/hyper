/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Textarea.module.scss';

type TextareaProps = { label?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, ...otherProps } = props;

  return <textarea className={cn(styles.textarea, className)} ref={ref} {...otherProps} />;
});
