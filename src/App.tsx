import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { Employees } from './components/pages/Employees';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { layoutConfig } from './config/layout-config';

function App() {
  return <BrowserRouter>
  <Routes>
      <Route path='/' element={<Navigator className={layoutConfig.className}
       routes={layoutConfig.routes}  />}>
          <Route index element={<Employees/>}/>
          <Route path='add' element={<AddEmployee/>}/>
          <Route path='statistics/age' element={<AgeStatistics/>}/>
          <Route path='statistics/salary' element={<SalaryStatistics/>}/>
          
      </Route>
          
  </Routes>
</BrowserRouter>
  }

export default App;