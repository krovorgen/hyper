import { FC } from 'react';

import { Header } from '../../components/Header/Header.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer.tsx';
import styles from './Layout.module.scss';
import { RoutePaths } from '../../constants';
import cn from 'classnames';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop.tsx';

type Props = {};

export const Layout: FC<Props> = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === RoutePaths.ABOUT;

  return (
    <div className={cn(styles.root, { [styles.ellipse]: isAboutPage })}>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
