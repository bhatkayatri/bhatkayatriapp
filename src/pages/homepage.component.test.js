import { shallow,mount,render } from "enzyme";
import { idText } from "typescript";
import {React}from "react";
//shallow:only main is rendered is js dom
//mount:main and its children are rendered in browser dom
//render:in hybrid platform of browser n jsdom
import HomePage from  './homepage.component'
import toJson from 'enzyme-to-json';

it('render',()=>{
    console.log(shallow(<HomePage/>))
})

it('renderlength',()=>{
    expect(shallow(<HomePage/>).length).toEqual(1);//only one component rendered because of shallow
})

it('take snapshot',()=>{
    expect( toJson(shallow(<HomePage/>))).toMatchSnapshot();//use this command for taking snapshot
}) 




