import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router";

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function FoodsWrapper() {
  const { restaurantsId } = useParams();
  return <Foods restaurantsId={restaurantsId} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 店舗一覧ページ */}
        <Route path="/restaurants" element={<Restaurants />} />
        {/* フード一覧ページ */}
        <Route
          path="/restaurants/:restaurantsId/foods"
          element={<FoodsWrapper/>}
        />
        {/* 注文ページ */}
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
