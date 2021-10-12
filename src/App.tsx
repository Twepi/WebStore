import React from 'react'
import './main.global.scss'
import { MainPanel } from './components/ManelPanel';
import { HeroContainer } from './components/HeroContainer/HeroContainer';

export function AppComponent() {
  return (
    <div>
      <MainPanel />
      <HeroContainer />
    </div>
  );
}