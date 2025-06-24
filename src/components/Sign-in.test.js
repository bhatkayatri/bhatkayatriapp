import { shallow,mount,render } from "enzyme";
import { idText } from "typescript";
import {React}from "react";
import SignIn from "./Sign-in";
import toJson from 'enzyme-to-json';
it('take snapshot',()=>{
    expect( toJson(shallow(<SignIn/>))).toMatchSnapshot();//use this command for taking snapshot
}) 

it('check increment',()=>{
    const wrapper=shallow(<SignIn/>);//use this command for taking snapshot
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:1,email:"",password:''});
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count:2,email:"",password:''});
    wrapper.find('[id="counter"]').simulate('keypress')//does nothing
    expect(wrapper.state()).toEqual({count:2,email:"",password:''});
    // expect(wrapper.props()).toEqual({count:2,email:"",password:''});
}) 
