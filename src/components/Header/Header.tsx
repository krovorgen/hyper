import { Link, NavLink } from 'react-router-dom';
import { JSX, useEffect, useState } from 'react';
import { RoutePaths } from '../../constants';
import logo from '../../assets/images/logo.svg';
import Burger from '../../assets/icons/burger.svg?react';
import Close from '../../assets/icons/close.svg?react';
import styles from './Header.module.scss';
import cn from 'classnames';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link to={RoutePaths.HOME} className={styles.logo}>
          <img src={logo} width={82} height={33} alt="Логотип" />
        </Link>

        <button className={styles.burger} onClick={toggleMenu}>
          {isOpen ? <Close /> : <Burger />}
        </button>

        <nav className={cn(styles.nav, { [styles.navOpen]: isOpen })}>
          <ul className={styles.items}>
            {[
              { path: RoutePaths.HOME, label: 'Главная' },
              { path: RoutePaths.FORMAT, label: 'Форматы' },
              { path: RoutePaths.SOLUTIONS, label: 'Решения' },
              { path: RoutePaths.INVENTORY_DATA, label: 'Инвентарь и данные' },
              { path: RoutePaths.ABOUT, label: 'О компании' },
            ].map(({ path, label }) => (
              <li key={path} className={styles.item}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : styles.link)}
                  onClick={closeMenu} // Закрываем меню после клика
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
