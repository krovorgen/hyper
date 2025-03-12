import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createReactPortalNode } from '../../helpers/createReactPortalNode.ts';

type ReactPortalProps = PropsWithChildren<{
  nodeId: string;
}>;

export const ReactPortal = ({ children, nodeId }: ReactPortalProps) => {
  const [node, setNode] = useState<Nullable<HTMLElement>>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(nodeId) as HTMLElement;
    let elementCreated = false;

    if (!element) {
      element = createReactPortalNode(nodeId);
      elementCreated = true;
    }

    setNode(element);

    return () => {
      if (elementCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [nodeId]);

  if (node === null) {
    return null;
  }

  return createPortal(children, node);
};
