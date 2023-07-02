"use client"; // This is a client component

import { useEffect } from 'react';
import AOS from 'aos';

import TopUpSteps from '@/components/organisms/TopUpSteps';
import TopGames from '@/components/organisms/TopGames';
import Count from '@/components/organisms/Count';
import Story from '@/components/organisms/Story';
import MainBanner from '@/components/organisms/MainBanner/Index';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MainBanner />

      <TopUpSteps />

      <TopGames />

      <Count />

      <Story />s
    </>
  )
}
