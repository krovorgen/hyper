import { FC } from 'react';

import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { RoutePaths } from '../../constants';

import arirLogo from '../../assets/images/components/Footer/arir.svg';
import skLogo from '../../assets/images/components/Footer/sk.svg';
import vkLogo from '../../assets/images/components/Footer/vk.svg';
import vcLogo from '../../assets/images/components/Footer/vc.svg';
import inLogo from '../../assets/images/components/Footer/in.svg';

type Props = {};

export const Footer: FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.block}>
            <Link to={RoutePaths.HOME} className={styles.logo}>
              <img src={logo} width={59} height="auto" alt="Логотип" />
            </Link>
            <div className={styles.address}>123112, г.Москва, Пресненская набережная 10 стр. 2, помещ. 5н</div>
          </div>
          <ul className={styles.items}>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <NavLink to={RoutePaths.FORMAT} className={styles.link}>
                    Форматы
                  </NavLink>
                </li>
                <li className={styles.element}>
                  <NavLink to={RoutePaths.INVENTORY_DATA} className={styles.link}>
                    Инвентарь и данные
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <NavLink to={RoutePaths.SOLUTIONS} className={styles.link}>
                    Решения
                  </NavLink>
                </li>
                <li className={styles.element}>
                  <NavLink to={RoutePaths.ABOUT} className={styles.link}>
                    О компании
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <ul className={styles.elements}>
                <li className={styles.element}>
                  <a href="tel:+74992851505" className={styles.link}>
                    +7 499 285 15 05
                  </a>
                </li>
                <li className={styles.element}>
                  <a href="mailto:hello@hyperad.tech" className={styles.link}>
                    hello@hyperad.tech
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.wrap}>
          <div className={styles.partners}>
            <p className={styles.partnersText}>Мы — участники:</p>
            <div className={styles.partnersLogos}>
              <a
                className={styles.partnersLogo}
                href="https://interactivead.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arirLogo} width={97} height={47} alt="Ассоциация развития интерактивной рекламы" />
              </a>
              <a className={styles.partnersLogo} href="https://sk.ru" target="_blank" rel="noopener noreferrer">
                <img src={skLogo} width={73} height={47} alt="Сколково" />
              </a>
            </div>
          </div>

          <div className={styles.copyright}>
            <NavLink to={RoutePaths.POLICY} className={styles.copyrightPrivacy}>
              Политика конфиденциальности
            </NavLink>
            <p className={styles.copyrightText}>Все права защищены © Hyper AdTech, 2024</p>
          </div>

          <div className={styles.socials}>
            <a className={styles.social} href="https://vk.com/hyperadtech" target="_blank" rel="noopener noreferrer">
              <img src={vkLogo} width={56} height={56} alt="vk" />
            </a>
            <a
              className={styles.social}
              href="https://vc.ru/u/1005865-hyper-adtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vcLogo} width={56} height={56} alt="vc" />
            </a>
            <a
              className={styles.social}
              href="https://www.linkedin.com/company/hyper-adtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inLogo} width={56} height={56} alt="linkedin.com" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
