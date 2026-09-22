import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { WorkTrack } from './components/WorkTrack';
import { PersonalTrack } from './components/PersonalTrack';
import { Program } from './components/Program';
import { FirstProfit } from './components/FirstProfit';
import { Tuition } from './components/Tuition';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-full w-full bg-canvas font-sans">
      <Nav />
      <main>
        <Hero />
        <WorkTrack />
        <PersonalTrack />
        <Program />
        <FirstProfit />
        <Tuition />
        <Faq />
      </main>
      <Footer />
    </div>);

}