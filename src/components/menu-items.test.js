import { shallow,mount,render } from "enzyme";
import { idText } from "typescript";
import {React}from "react";
import MenuItems from "./menu-items";
import toJson from 'enzyme-to-json';
it('take snapshot',()=>{
    expect( toJson(shallow(<MenuItems/>))).toMatchSnapshot();//use this command for taking snapshot
}) 
