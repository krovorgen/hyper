import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';

export const Solutions = () => {
  return (
    <>
      <Hero />
      <Feedback
        title="Используйте лучшие технологические решения Hyper AdTech и выполняйте свои задачи"
        maxWidth={550}
      />
    </>
  );
};
