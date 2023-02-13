import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/navigators/Layout';
import { Products } from './components/navigators/Products';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { Navigator } from './components/navigators/Navigator';
import { layoutConfig } from './config/layout-config';
import { productsConfig } from './config/products-config';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigator className={layoutConfig.className} routes={layoutConfig.routes} />}>
      <Route index element={<Home/>}></Route>
      <Route path='customers' element={<Customers/>}/>
      <Route path='orders' element={<Orders/>} />
      <Route path='products' element={<Navigator
               className={productsConfig.className} routes={productsConfig.routes}/>}>
                    <Route path='dairy' element={<DairyProducts/>}/>
                    <Route path='bread' element={<BreadProducts/>}/>
              </Route>
    </Route>
  </Routes>
  </BrowserRouter>
  }

export default App;