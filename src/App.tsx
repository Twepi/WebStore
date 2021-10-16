import React from 'react'
import './main.global.scss'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { MainPanel } from './components/ManelPanel';
import { HeroContainer } from './components/HeroContainer/HeroContainer';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { Footer } from './components/Footer/Footer';

export function AppComponent() {
  return (
    <BrowserRouter>
      <MainPanel />
      <Route exact path="/">
        <HeroContainer />
        <ProductGrid />
        <Footer />
      </Route>
    </BrowserRouter>
  );
}