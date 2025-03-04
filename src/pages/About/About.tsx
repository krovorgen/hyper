import { Hero } from './Hero/Hero.tsx';
import { Contact } from '../../components/Contact/Contact.tsx';
import { Steps } from './Steps/Steps.tsx';
import { Awards } from './Awards/Awards.tsx';

export const About = () => {
  return (
    <>
      <Hero />
      <Steps />
      <Awards />
      <Contact />
    </>
  );
};
