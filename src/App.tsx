import React from 'react'
import './main.global.scss'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { MainPanel } from './components/ManelPanel';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer/Footer';
import { HeroPreview } from './components/HeroPreview';
import { HeroHeader } from './components/HeroHeader';
import { data } from './data'
import { ProductPage } from './components/ProductPage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './store';
import { Provider } from 'react-redux';
import { CartPage } from './components/CartPage';

// @ts-ignore
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export function AppComponent() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <MainPanel />
        <Route exact path="/">
          <HeroPreview />
          <HeroHeader text='Featured Products' />
          <ProductGrid data={data.homeProd} />
        </Route>

        <Route path='/apparel'>
          <HeroHeader text='Apparel' />
          <ProductGrid data={data.apparelProd} />
        </Route>

        <Route path='/unisex-men-s-t-shirts'>
          <HeroHeader text="Unisex / Men's T-Shirts" />
          <ProductGrid data={data.menProd} />
        </Route>

        <Route path='/women-s-t-shirts'>
          <HeroHeader text="Women's T-Shirts" />
          <ProductGrid data={data.womenProd} />
        </Route>

        <Route path='/hoodies-sweatshirts'>
          <HeroHeader text="Hoodies & sweatshirts" />
          <ProductGrid data={data.hoodiesProd} />
        </Route>

        <Route path='/homeware'>
          <HeroHeader text='Homeware' />
          <ProductGrid data={data.homewareProd} />
        </Route>

        <Route path='/pillows'>
          <HeroHeader text='Pillows' />
          <ProductGrid data={data.pillowsProd} />
        </Route>

        <Route path='/bath'>
          <HeroHeader text='bath' />
          <ProductGrid data={data.bathProd} />
        </Route>

        <Route path='/bedding'>
          <HeroHeader text='bedding' />
          <ProductGrid data={data.beddingProd} />
        </Route>

        <Route path='/accessories'>
          <HeroHeader text='Accessories' />
          <ProductGrid data={data.accessoriesProd} />
        </Route>

        <Route path='/face-masks'>
          <HeroHeader text='face masks' />
          <ProductGrid data={data.faceProd} />
        </Route>

        <Route path='/phone-cases'>
          <HeroHeader text='phone cases' />
          <ProductGrid data={data.phoneProd} />
        </Route>

        <Route path='/socks'>
          <HeroHeader text='socks' />
          <ProductGrid data={data.socksProd} />
        </Route>

        <Route path='/productpage'>
          <ProductPage />
        </Route>

        <Route path='/cart'>
          <CartPage/>
        </Route>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}