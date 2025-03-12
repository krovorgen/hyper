import { MouseEvent, PropsWithChildren, useEffect } from 'react';

import CloseGrey from '../../assets/icons/close-grey.svg?react';

import styles from './Modal.module.scss';
import { ReactPortal } from '../ReactPortal/ReactPortal.tsx';

type ModalProps = PropsWithChildren<{
  isLoading?: boolean;
  nodeId?: string;
  onClose: () => void;
}>;

export const Modal = (props: ModalProps) => {
  const { children, onClose, nodeId = 'modal', isLoading = false } = props;

  const handleWrapperClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget || isLoading) {
      return;
    }

    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <ReactPortal nodeId={nodeId}>
      <div className={styles.wrapper} onClick={handleWrapperClick}>
        <div className={styles.modal} role="dialog">
          <button type="button" onClick={onClose} className={styles.close}>
            <CloseGrey />
          </button>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
};
