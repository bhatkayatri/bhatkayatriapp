import { shallow,mount,render } from "enzyme";
import { idText } from "typescript";
import {React}from "react";
import PreviewCollection from "./previewcollection";
import toJson from 'enzyme-to-json';
it('take snapshot',()=>{
    const temp_DATA = [
        {
          id: 1,
          title: 'Hats',
          routeName: 'hats',
          items: [
            {
              id: 1,
              name: 'Brown Brim',
              imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              price: 25
            }
        ]
    }]//here props were mandatory for previewcollection

    expect( toJson(shallow(<PreviewCollection title={temp_DATA[0].title} items={temp_DATA[0].items}/>))).toMatchSnapshot();//use this command for taking snapshot
}) 
