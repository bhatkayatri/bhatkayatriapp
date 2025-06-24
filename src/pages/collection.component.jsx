import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PreviewCollectionItem from '../components/previewcollectionitem';
import { selectCollection } from '../redux/shop/shop.selectors';

import './collection.component.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  if (!collection) {
    return (
      <div className="collection-page">
        <h2 className="title">Collection Not Found</h2>
        <p>The collection "{collectionId}" does not exist.</p>
      </div>
    );
  }

  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <PreviewCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
