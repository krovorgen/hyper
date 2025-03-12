import { Hero } from './Hero/Hero.tsx';
import { Blockquote } from './Blockquote/Blockquote.tsx';
import { Industries } from './Industries/Industries.tsx';
import { Trust } from './Trust/Trust.tsx';
import { Results } from './Results/Results.tsx';
import { Partners } from './Partners/Partners.tsx';
import { Contact } from '../../components/Contact/Contact.tsx';
import { AdvertisingFormat } from '../../components/AdvertisingFormat/AdvertisingFormat.tsx';

export const Home = () => {
  return (
    <>
      <Hero />
      <AdvertisingFormat />
      <Blockquote />
      <Industries />
      <Trust />
      <Results />
      <Partners />
      <Contact />
    </>
  );
};
