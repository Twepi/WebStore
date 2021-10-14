import React from 'react'
import './main.global.scss'
import { MainPanel } from './components/ManelPanel';
import { HeroContainer } from './components/HeroContainer/HeroContainer';
import { ProductGrid } from './components/ProductGrid/ProductGrid';

export function AppComponent() {
  return (
    <div>
      <MainPanel />
      <HeroContainer />
      <ProductGrid />
    </div>
  );
}