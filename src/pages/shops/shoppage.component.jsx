import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection.overview.component';
import CollectionPage from '../collection.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
