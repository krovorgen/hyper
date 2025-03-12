import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';
import { AdvertisingFormat } from '../../components/AdvertisingFormat/AdvertisingFormat.tsx';

export const Format = () => {
  return (
    <>
      <Hero />
      <AdvertisingFormat />
      <Feedback
        title="Размещайте рекламу в лучших форматах и выполняйте свои задачи вместе с hyper adtech"
        maxWidth={594}
      />
    </>
  );
};
