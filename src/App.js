import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner.jsx";
import Layout from "./components/layout/Layout";
import BrandsPage from "./pages/brands/BrandsPage.jsx";

const HomePage = React.lazy(() => import("./pages/home/HomePage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/brandspage" element={<BrandsPage />} />
         
        </Routes>
      </Suspense>
      </Layout>
    
  );
}

export default App;
