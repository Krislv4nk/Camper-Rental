import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Favorites from "../pages/Favorites";

import { Features } from "components/Features/Features";
import { Reviews } from "components/Reviews/Reviews";
import { Layout } from "components/Layout/Layout";


export const App = () => {
  return (
   <Layout>
          
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/favorites" element={<Favorites />}>
    <Route path="features" element={<Features />} />
    <Route path="reviews" element={<Reviews />} />
</Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
    
        </Layout>
  );
};
