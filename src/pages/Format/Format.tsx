import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';

export const Format = () => {
  return (
    <>
      <Hero />
      <Feedback
        title="Размещайте рекламу в лучших форматах и выполняйте свои задачи вместе с hyper adtech"
        maxWidth={594}
      />
    </>
  );
};
