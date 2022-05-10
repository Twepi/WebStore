import React, { useEffect, useState } from 'react'
import './main.global.scss'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { MainPanel } from './components/ManelPanel';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer/Footer';
import { HeroPreview } from './components/HeroPreview';
import { HeroHeader } from './components/HeroHeader';
import { ProductPage } from './components/ProductPage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './store';
import { Provider, useDispatch } from 'react-redux';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { RootObject } from './interfaces/products';
import { setLogged } from './store/login/action';

// @ts-ignore
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export function AppComponent() {

  const [data, setData] = useState<RootObject[]>([])


  useEffect(() => {
    (async () => {
      const allProducts = await fetch('http://localhost:8000/api/allProducts/', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      })
      let data = await allProducts.json()
      console.log(data)
      setData(data)
    })()

  }, [])


  return data.length > 1 ? (

    <Provider store={store}>
      <BrowserRouter>
        <MainPanel />
        <Route exact path="/">
          <HeroPreview />
          <HeroHeader text='Featured Products' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 10)} />
        </Route>

        <Route path='/apparel'>
          <HeroHeader text='Apparel' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 10)} />
        </Route>

        <Route path='/unisex-men-s-t-shirts'>
          <HeroHeader text="Unisex / Men's T-Shirts" />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 1)} />
        </Route>

        <Route path='/women-s-t-shirts'>
          <HeroHeader text="Women's T-Shirts" />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 2)} />
        </Route>

        <Route path='/hoodies-sweatshirts'>
          <HeroHeader text="Hoodies & sweatshirts" />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 3)} />
        </Route>

        <Route path='/homeware'>
          <HeroHeader text='Homeware' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 10)} />
        </Route>

        <Route path='/pillows'>
          <HeroHeader text='Pillows' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 4)} />
        </Route>

        <Route path='/bath'>
          <HeroHeader text='bath' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 5)} />
        </Route>

        <Route path='/bedding'>
          <HeroHeader text='bedding' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 6)} />
        </Route>

        <Route path='/accessories'>
          <HeroHeader text='Accessories' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 10)} />
        </Route>

        <Route path='/face-masks'>
          <HeroHeader text='face masks' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 7)} />
        </Route>

        <Route path='/phone-cases'>
          <HeroHeader text='phone cases' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 8)} />
        </Route>

        <Route path='/socks'>
          <HeroHeader text='socks' />
          <ProductGrid data={data.filter((el: RootObject) => el.fields.id_type === 9)} />
        </Route>

        <Route path='/productpage'>
          <ProductPage />
        </Route>

        <Route path='/cart'>
          <CartPage/>
        </Route>

        <Route path='/checkout'>
          <CheckoutPage/>
        </Route>

        <Footer />
      </BrowserRouter>
    </Provider>
  ) : null;
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
