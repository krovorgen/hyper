import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react';
import ChevronRight from '../../../assets/icons/chevron-right.svg?react';
import styles from './Partners.module.scss';
import { Button } from '../../../components/Button/Button.tsx';
import { Navigation } from 'swiper/modules';
import groupCompany from '../../../assets/images/pages/Home/Partners/group.png';
import articsCompany from '../../../assets/images/pages/Home/Partners/artics.svg';
import sberCompany from '../../../assets/images/pages/Home/Partners/sber.png';
import healthnutritionCompany from '../../../assets/images/pages/Home/Partners/healthnutrition.webp';
import cn from 'classnames';
import { MediaplanButton } from '../../../components/MediaplanButton/MediaplanButton.tsx';

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
              autoHeight
              modules={[Navigation]}
              navigation={{
                nextEl: '#partners-btn-next',
                prevEl: '#partners-btn-prev',
              }}
            >
              <SwiperSlide>
                <div className={cn(styles.wrap, styles.wrapFirst)}>
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={groupCompany} width={204} height={38} alt="Company" />
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
              <SwiperSlide>
                <div className={styles.wrap}>
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={articsCompany} width={75} height={75} alt="Company" />
                    </div>
                    <div className={styles.info}>
                      <p className={styles.name}>Михаил Томилов</p>
                      <p className={styles.bio}>Programmatic Lead Artics Internet Solutions</p>
                    </div>
                  </div>
                  <div className={styles.text}>
                    <p>
                      Мы в Artics регулярно тестируем новые инструменты и платформы. И в том числе протестировали
                      возможности платформы Hyper AdTech в рамках in-app кампаний. Результатами тестов мы остались
                      довольны. И спасибо коллегам за оперативность в работе и ответственный подход.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.wrap}>
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={sberCompany} width={150} height="aut" alt="Company" />
                    </div>
                    <div className={styles.info}>
                      <p className={styles.name}>Анна Рыбкина</p>
                      <p className={styles.bio}>Digital Group Head СберМаркетинг</p>
                    </div>
                  </div>
                  <div className={styles.text}>
                    <p>
                      СберМаркетинг активно размещает рекламные кампании своих клиентов на инвентаре Hyper AdTech. Мы
                      остаемся довольны результатами проектов и клиентским сервисом Hyper AdTech. В дальнейшем планируем
                      продолжать активное и плодотворное сотрудничество.
                      <br />
                      Искренне желаем Hyper AdTech успехов и дальнейшего развития!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.wrap}>
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={healthnutritionCompany} width={150} height="auto" alt="Company" />
                    </div>
                    <div className={styles.info}>
                      <p className={styles.name}>Марина Сафонова</p>
                      <p className={styles.bio}>Marketing Digital Lead АО «Эйч энд Эн»</p>
                    </div>
                  </div>
                  <div className={styles.text}>
                    <p>
                      Хотелось бы поделиться своим положительным опытом работы с платформой Hyper AdTech. Мы
                      сотрудничаем уже больше 1,5 лет и данная DSP оказалась незаменимым инструментом для эффективного
                      управления нашими рекламными кампаниями.
                    </p>
                    <p>
                      Алгоритмы и технологии, используемые Hyper AdTech позволяют точно настраивать и оптимизировать
                      целевую аудиторию кампаний, а также повышать конверсию и эффективность рекламных сообщений. Так же
                      мы были приятно удивлены результатами, которые удалось достичь благодаря использованию данной
                      платформы по попаданию в ЦА.
                    </p>
                    <p>
                      С уверенностью могу рекомендовать Hyper AdTech как надежную и эффективную платформу DSP для
                      управления рекламными кампаниями. Их передовые технологии и отличный уровень поддержки клиентов
                      делают работу с ними приятной и результативной. Благодарна Hyper AdTech за их профессионализм и
                      надежность.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
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

        <MediaplanButton classButton={styles.btn} isCenterButton textButton="Получить медиаплан" />
      </div>
    </div>
  );
};
