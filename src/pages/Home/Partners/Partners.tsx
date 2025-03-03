import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../../assets/icons/chevron-right.svg?react';
import styles from './Partners.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import { Navigation } from 'swiper/modules';
import groupCompany from '../../../assets/images/pages/Home/Partners/group.png';
import cn from 'classnames';

type Props = {};

export const Partners: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.swiper}>
            <Swiper
              spaceBetween={3}
              slidesPerView={1}
              loop
              modules={[Navigation]}
              navigation={{
                nextEl: '#partners-btn-next',
                prevEl: '#partners-btn-prev',
              }}
            >
              <SwiperSlide>
                <div className={styles.wrap}>
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={groupCompany} width={204} height={38} alt="Груп" />
                    </div>
                    <div className={styles.info}>
                      <p className={styles.name}>Анастасия Лакомова</p>
                      <p className={styles.bio}>Digital Trading & Partnership Director</p>
                    </div>
                  </div>
                  <div className={styles.text}>
                    <p>
                      Медиахолдинг Group4Media регулярно размещает рекламные кампании клиентов на мобильном инвентаре
                      Hyper AdTech. Платформа достойно выполняет медийные KPI брендов, контролирует качество размещения,
                      исключая fraud-трафик на основе данных внешних верификаторов. Желаем дальнейшего развития Hyper
                      AdTech!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.navs}>
            <Button
              id="partners-btn-prev"
              className={cn(styles.nav, styles.navLeft)}
              variant="secondary"
              leftAddons={<ChevronLeft />}
            />
            <Button
              id="partners-btn-next"
              className={cn(styles.nav, styles.navRight)}
              variant="secondary"
              leftAddons={<ChevronRight />}
            />
          </div>
        </div>
        <Button className={styles.btn} center>
          Получить медиаплан
        </Button>
      </div>
    </div>
  );
};
