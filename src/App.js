import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner.jsx";
import Layout from "./components/layout/Layout";



const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const BrandsPage = React.lazy(() => import("./pages/brands/BrandsPage"));
const AboutPage =  React.lazy(() => import("./pages/about/AboutPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/brandspage" element={<BrandsPage />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
        </Routes>
      </Suspense>
      </Layout>
    
  );
}

export default App;
