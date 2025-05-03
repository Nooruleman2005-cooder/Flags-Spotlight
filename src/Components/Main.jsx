import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import CountryDetail from './CountryDetail';
import SearchPage from './SearchPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/search/:searchTerm' element={<SearchPage />} />
      <Route path="/country/:name" element={<CountryDetail />} />
    </Route>
  )
);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;

