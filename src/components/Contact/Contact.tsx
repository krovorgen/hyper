import { FC } from 'react';

import styles from './Contact.module.scss';
import { Input } from '../Input/Input.tsx';
import { Textarea } from '../Textarea/Textarea.tsx';
import { Button } from '../Button/Button.tsx';
import address from '../../assets/images/pages/Home/Contact/address.svg';
import email from '../../assets/images/pages/Home/Contact/email.svg';
import phone from '../../assets/images/pages/Home/Contact/phone.svg';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

type Props = {};

type FormData = {
  name: string;
  email: string;
  about: string;
};

export const Contact: FC<Props> = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    toast.success('В ближайшее время мы с Вами свяжемся!');
    console.log(data);
    reset();
  };

  return (
    <div className={styles.root} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Всегда на связи</h2>
          <p className={styles.text}>Обращайтесь по любым вопросам — ответим или перезвоним в ближайшее время</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Фио" {...register('name')} />
            <Input placeholder="Email" {...register('email')} />
            <Textarea
              placeholder="Сообщите, о чём хотите узнать – в точности или общими словами"
              {...register('about')}
            />
            <Button type="submit" block>
              Отправить
            </Button>
          </form>
          <ul className={styles.items}>
            <li className={styles.item}>
              <p className={styles.link}>
                <img className={styles.icon} width={20} height={18} src={address} alt="Адрес" />
                123001, г. Москва, Благовещенский переулок, 3 стр. 1
              </p>
            </li>
            <li className={styles.item}>
              <a href="mailto:hello@hyperad.tech" className={styles.link}>
                <img className={styles.icon} width={20} height={14} src={email} alt="Email" />
                hello@hyperad.tech
              </a>
              <a href="tel:+74992851505" className={styles.link}>
                <img className={styles.icon} width={20} height={16} src={phone} alt="Телефон" />
                +7 499 285-15-05
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
