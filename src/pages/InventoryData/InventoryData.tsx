import { Hero } from './Hero/Hero.tsx';
import { Feedback } from '../../components/Feedback/Feedback.tsx';
import { MobileApps } from './MobileApps/MobileApps.tsx';
import { Segments } from './Segments/Segments.tsx';
import { About } from './About/About.tsx';

export const InventoryData = () => {
  return (
    <>
      <Hero />
      <MobileApps />
      <Segments />
      <About />
      <Feedback
        title="Hyper ID нивелирует возникшие изменения для игроков рекламного рынка, использующих идентификаторы пользователей для проведения эффективных рекламных кампаний в мобильной среде."
        maxWidth={886}
      />
    </>
  );
};
