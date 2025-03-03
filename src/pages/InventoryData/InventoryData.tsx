import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';

export const InventoryData = () => {
  return (
    <>
      <Hero />
      <Feedback
        title="Hyper ID нивелирует возникшие изменения для игроков рекламного рынка, использующих идентификаторы пользователей для проведения эффективных рекламных кампаний в мобильной среде."
        maxWidth={886}
      />
    </>
  );
};
