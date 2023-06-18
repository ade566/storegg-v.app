"use client"; // This is a client component

import { useEffect } from 'react';
import AOS from 'aos';

import Image from 'next/image'
import { Navbar } from '@/components/organisms/Navbar';
import Link from 'next/link';
import { Header } from '@/components/organisms/Header/Index';
import { TopUpSteps } from '@/components/organisms/TopUpSteps';
import { TopGames } from '@/components/organisms/TopGames';
import { Footer } from '@/components/organisms/Footer';
import { Count } from '@/components/organisms/Count';
import { Story } from '@/components/organisms/Story';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <Header />

      <TopUpSteps />

      <TopGames />

      <Count />

      <Story />

      <Footer />
    </>
  )
}
