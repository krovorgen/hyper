import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';
import { TechnologicalSolutions } from './TechnologicalSolutions/TechnologicalSolutions.tsx';

export const Solutions = () => {
  return (
    <>
      <Hero />
      <TechnologicalSolutions />
      <Feedback
        title="Используйте лучшие технологические решения Hyper AdTech и выполняйте свои задачи"
        maxWidth={550}
      />
    </>
  );
};
