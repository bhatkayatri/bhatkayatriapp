import React from 'react';
import '../components/previewcollection.scss';
import PreviewCollectionItem from './previewcollectionitem'
const PreviewCollection=({title,items})=>{
    return (
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <PreviewCollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>

    )

}

export default PreviewCollection;