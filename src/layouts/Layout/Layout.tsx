import { FC } from 'react';

import { Header } from '../../components/Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer.tsx';
import styles from './Layout.module.scss';

type Props = {};

export const Layout: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
