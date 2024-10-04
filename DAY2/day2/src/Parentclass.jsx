import React from "react";
import UserClass from "./UserClass";
class Parentclass extends React.Component{
    constructor(props){
        super(props);
console.log("parent  constructor");

    }
componentDidMount(){
    console.log("parent component did mount")
}

    render(){
        console.log("parent render");
        
        return(<>
        <UserClass number={1}  name={"bunny"} city={"Hyderabad"}/>
        <UserClass number={2}  name={"abhi"} city={"Mumbai"}/>

        </>)
    }
}
export default Parentclass