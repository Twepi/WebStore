import React from 'react'
import './main.global.scss'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { MainPanel } from './components/ManelPanel';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { Footer } from './components/Footer/Footer';
import { HeroPreview } from './components/HeroPreview';
import { HeroHeader } from './components/HeroHeader/HeroHeader';
import { data } from './data'


export function AppComponent() {
  return (
    <BrowserRouter>
      <MainPanel />
      <Route exact path="/">
        <HeroPreview />
        <HeroHeader text='Featured Products' />
        <ProductGrid data={data.homeProd} />
      </Route>

      <Route path='/Apparel'>
        <HeroHeader text='Apparel' />
        <ProductGrid data={data.apparelProd} />
      </Route>

      <Route path='/Homeware'>
        <HeroHeader text='Homeware' />
        <ProductGrid data={data.homewareProd} />
      </Route>

      <Route path='/Accessories'>
        <HeroHeader text='Accessories' />
        <ProductGrid data={data.accessoriesProd} />
      </Route>

      <Footer />
    </BrowserRouter>
  );
}