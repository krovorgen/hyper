import { FC, useEffect, useRef } from 'react';

import { Header } from '../../components/Header/Header.tsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer.tsx';
import styles from './Layout.module.scss';
import { RoutePaths } from '../../constants';
import cn from 'classnames';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop.tsx';

type Props = {};

export const Layout: FC<Props> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === RoutePaths.ABOUT;

  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
        navigate(location.pathname, { replace: true }); // Удаляем хеш из URL
      }, 100);
    }
  }, [location, navigate]);

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
