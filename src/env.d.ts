/// <reference types="@rsbuild/core/types" />
/// <reference types="react" />

namespace JSX {
  interface IntrinsicElements {
    mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
export declare global {
  declare module '*.svg?react';
  declare module '*.scss';
  declare module '*.png';
  declare module '*.svg';

  type Nullable<T> = T | null;
}
