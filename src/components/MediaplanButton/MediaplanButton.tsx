import { FC } from 'react';

import { Button } from '../Button/Button.tsx';
import { MediaplanModal } from '../MediaplanModal/MediaplanModal.tsx';
import { useModalToggle } from '../../hooks/useModalToggle.ts';

type Props = {
  textButton: string;
  classButton?: string;
  isCenterButton?: boolean;
};

export const MediaplanButton: FC<Props> = ({ textButton, classButton, isCenterButton = false }) => {
  const { isOpen: isMediaplanModalOpen, open: openMediaplanModal, close: closeMediaplanModal } = useModalToggle();
  return (
    <>
      {isMediaplanModalOpen && <MediaplanModal onClose={closeMediaplanModal} />}

      <Button className={classButton} center={isCenterButton} onClick={openMediaplanModal} variant="primary">
        {textButton}
      </Button>
      {}
    </>
  );
};
