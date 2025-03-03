import { FC } from 'react';

import picture from '../../../assets/images/pages/Home/Industries/bg.svg';

import styles from './Industries.module.scss';
import { Title } from '../../../components/Title/Title.tsx';

type Props = {};

export const Industries: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <Title maxWidth={730} centered className={styles.title}>
          Работаем с <mark>ведущими брендами</mark> из&nbsp;различных отраслей
        </Title>
        <div className={styles.img}>
          <img src={picture} alt="Отрасли работы" />
        </div>
      </div>
    </div>
  );
};
