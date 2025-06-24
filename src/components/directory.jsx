import React from 'react';
import './directory.scss';
import MenuItems from './menu-items';
import { connect } from 'react-redux';
// import { mapStateToProps } from 'react-redux';
import {selectDirectorySections} from '../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
const Directory= ({sections})=>{
 
  return(<div className="directory-menu">
  {
  //  this.state.sections.map(({id,title,imageUrl,size})=>{
  //  return( <MenuItems key={id} title={title} image={imageUrl} size={size}/>
  //  )})
  sections.map(({id,...otherProps})=>{
    return( <MenuItems key={id} {...otherProps}/>
    )})
  }
 
 </div>)
  
 }
 const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

 

export default connect(mapStateToProps)(Directory);