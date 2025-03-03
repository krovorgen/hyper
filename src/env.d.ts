/// <reference types="@rsbuild/core/types" />
/// <reference types="react" />

declare module '*.svg?react' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

namespace JSX {
  interface IntrinsicElements {
    mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
