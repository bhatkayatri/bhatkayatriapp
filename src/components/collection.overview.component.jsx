import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../components/previewcollection';

import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';

import './collection.overview.component.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview //used to get all the shop data
});

export default connect(mapStateToProps)(CollectionsOverview);