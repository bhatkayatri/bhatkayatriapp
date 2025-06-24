import { shallow,mount,render } from "enzyme";
import { idText } from "typescript";
import {React}from "react";
import PreviewCollectionItem from "./previewcollectionitem";
import toJson from 'enzyme-to-json';
it('take snapshot',()=>{
    expect( toJson(shallow(<PreviewCollectionItem/>))).toMatchSnapshot();//use this command for taking snapshot
}) 


