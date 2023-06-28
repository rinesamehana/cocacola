import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner.jsx";
import Layout from "./components/layout/Layout";


const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const BrandsPage = React.lazy(() => import("./pages/brands/BrandsPage"));
const AboutPage = React.lazy(() => import("./pages/about/AboutPage"));
const FantaPage = React.lazy(() => import("./pages/fanta/FantaPage"));
const SpritePage = React.lazy(() => import("./pages/sprite/SpritePage"));
const SchweppesPage = React.lazy(() =>
  import("./pages/schweppes/SchweppesPage")
);
const FuzeteaPage = React.lazy(() => import("./pages/fuzetea/FuzeteaPage"));
const DietCokePage = React.lazy(() => import("./pages/dietcoke/DietCokePage"));
const AdesPage = React.lazy(() => import("./pages/ades/AdesPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/brandspage" element={<BrandsPage />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/fantapage" element={<FantaPage />} />
          <Route exact path="/spritepage" element={<SpritePage />} />
          <Route exact path="/schweppespage" element={<SchweppesPage />} />
          <Route exact path="/fuzeteapage" element={<FuzeteaPage />} />
          <Route exact path="/dietcokepage" element={<DietCokePage />} />
          <Route exact path="/adespage" element={<AdesPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
