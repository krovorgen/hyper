import { Modal } from '../Modal/Modal.tsx';
import { Checkbox } from '../Checkbox/Checkbox.tsx';
import { Controller, useForm } from 'react-hook-form';
import styles from './MediaplanModal.module.scss';
import { toast } from 'react-toastify';
import { Input } from '../Input/Input.tsx';
import { Button } from '../Button/Button.tsx';
import cn from 'classnames';
import { audience, category, duration, geography } from './inputsText.ts';
import { RoutePaths } from '../../constants';

type Props = {
  onClose: () => void;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  agency: string;
  brand: string;
  campaignGoal: string;
  comment: string;
  productCategories: string[];
  customCategory?: string;
  audience: string[];
  geography: string[];
  campaignDuration: string[];
  customDuration?: string;
  customGeography?: string;
};

export const MediaplanModal = ({ onClose }: Props) => {
  const { control, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      agency: '',
      brand: '',
      campaignGoal: '',
      comment: '',
      productCategories: [],
      customCategory: '',
      audience: [],
      geography: [],
      customGeography: '',
      campaignDuration: [],
      customDuration: '',
    },
  });

  const watchDuration = watch('campaignDuration');
  const showCustomDuration = watchDuration.includes('Свой вариант');

  const watchGeography = watch('geography');
  const showCustomGeography = watchGeography.includes('Свой вариант');

  const watchCategory = watch('productCategories');
  const showCustomCategory = watchCategory.includes('Свой вариант');

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    toast.success('Спасибо за отправку!');
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formItem}>
          <h2 className={styles.title}>Заполните форму и получите медиаплан</h2>
        </div>

        {/* Персональные данные */}
        <div className={styles.formItem}>
          <h3 className={styles.subtitle}>Срок рекламной кампании</h3>
          <div className={styles.wrap}>
            <div className={styles.wrapRow}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Имя" />}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Фамилия" />}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
            </div>
            <div className={styles.wrapRow}>
              <Controller
                name="agency"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Название агентства" />}
              />
              <Controller
                name="brand"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Наименование бренда" />}
              />
            </div>
          </div>
        </div>

        {/* Данные о продукте */}
        <div className={styles.formItem}>
          <h3 className={styles.subtitle}>Данные о продукте и рекламной кампании</h3>
          <div className={cn(styles.grid, styles.grid3)}>
            {category.map((category) => (
              <Controller
                key={category}
                name="productCategories"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    labelClassName={styles.checkbox}
                    checked={field.value.includes(category)}
                    onChange={() =>
                      field.value.includes(category)
                        ? setValue(
                            'productCategories',
                            field.value.filter((c) => c !== category)
                          )
                        : setValue('productCategories', [...field.value, category])
                    }
                  >
                    {category}
                  </Checkbox>
                )}
              />
            ))}
          </div>

          {showCustomCategory && (
            <div className={styles.custom}>
              <Controller
                name="customCategory"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Введите ваш вариант" />}
              />
            </div>
          )}

          <div className={styles.custom}>
            <Controller
              name="campaignGoal"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Цель рекламной кампании" />}
            />
          </div>
        </div>

        {/* Целевая аудитория */}
        <div className={styles.formItem}>
          <h3 className={styles.subtitle}>Целевая аудитория (соц. дем.)</h3>
          <div className={cn(styles.grid, styles.grid5)}>
            {audience.map((audience) => (
              <Controller
                key={audience}
                name="audience"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    labelClassName={styles.checkbox}
                    checked={field.value.includes(audience)}
                    onChange={() =>
                      field.value.includes(audience)
                        ? setValue(
                            'audience',
                            field.value.filter((a) => a !== audience)
                          )
                        : setValue('audience', [...field.value, audience])
                    }
                  >
                    {audience}
                  </Checkbox>
                )}
              />
            ))}
          </div>
        </div>

        {/* География */}
        <div className={styles.formItem}>
          <h3 className={styles.subtitle}>География рекламной кампании</h3>
          <div className={cn(styles.grid, styles.grid3)}>
            {geography.map((geo) => (
              <Controller
                key={geo}
                name="geography"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    labelClassName={styles.checkbox}
                    checked={field.value.includes(geo)}
                    onChange={() =>
                      field.value.includes(geo)
                        ? setValue(
                            'geography',
                            field.value.filter((g) => g !== geo)
                          )
                        : setValue('geography', [...field.value, geo])
                    }
                  >
                    {geo}
                  </Checkbox>
                )}
              />
            ))}
          </div>

          {showCustomGeography && (
            <div className={styles.custom}>
              <Controller
                name="customGeography"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Введите ваш вариант" />}
              />
            </div>
          )}
        </div>

        {/* Срок рекламной кампании */}
        <div className={styles.formItem}>
          <h3 className={styles.subtitle}>Срок рекламной кампании</h3>
          <div className={cn(styles.grid, styles.grid3)}>
            {duration.map((duration) => (
              <Controller
                key={duration}
                name="campaignDuration"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    labelClassName={styles.checkbox}
                    checked={field.value.includes(duration)}
                    onChange={() =>
                      field.value.includes(duration)
                        ? setValue(
                            'campaignDuration',
                            field.value.filter((d) => d !== duration)
                          )
                        : setValue('campaignDuration', [...field.value, duration])
                    }
                  >
                    {duration}
                  </Checkbox>
                )}
              />
            ))}
          </div>

          {showCustomDuration && (
            <div className={styles.custom}>
              <Controller
                name="customDuration"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Введите ваш вариант" />}
              />
            </div>
          )}
        </div>

        {/* Комментарий */}
        <div className={styles.formItem}>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Комментарий" />}
          />{' '}
        </div>

        {/* Кнопка отправки */}
        <div className={cn(styles.formItem, styles.formBox)}>
          <Button type="submit" variant="primary">
            Получить медиаплан
          </Button>
          <p className={styles.text}>
            Нажимая кнопку «Отправить» вы подтверждаете, что ознакомились с{' '}
            <a href={RoutePaths.POLICY} target="_blank">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
      </form>
    </Modal>
  );
};
