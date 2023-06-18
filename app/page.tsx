import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '@/components/organisms/Navbar';
import TopUpSteps from '@/components/organisms/TopUpSteps';
import TopGames from '@/components/organisms/TopGames';
import Footer from '@/components/organisms/Footer';
import Count from '@/components/organisms/Count';
import Story from '@/components/organisms/Story';
import MainBanner from '@/components/organisms/MainBanner/Index';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <MainBanner />

      <TopUpSteps />

      <TopGames />

      <Count />

      <Story />

      <Footer />
    </>
  )
}
