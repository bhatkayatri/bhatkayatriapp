import React from 'react';
import '../components/previewcollectionitem.scss';
import CustomButton from './custom-button';
import { addItem } from '../redux/cart/cart.actions';
import { connect } from 'react-redux';
const PreviewCollectionItem=({item,addItem})=>{//use curly braces  with return when want to manipulate inside this block
    const {name,price,imageUrl}=item;
    return (
        <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>Add to cart</CustomButton>
      </div>

    )

}
const mapDispatchToProps=(dispatch)=>({
  addItem:(item)=>dispatch(addItem(item))
  })

export default connect(null,mapDispatchToProps)(PreviewCollectionItem);