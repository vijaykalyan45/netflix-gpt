import React from "react";
import  axios from 'axios'
class UserClass extends React.Component{
    constructor(props){
        super(props);
      this.state={
        count:0,
        count1:100,
        userinfo:{
            name:"abhi",
            age:25
        }
      }
      
      console.log(`child ${this.props.number} constructer method`);
        
    }

    async componentDidMount(){
        console.log(`child ${this.props.number}  component did mount `);
        const responce=await axios("https://jsonplaceholder.typicode.com/users/1");
        const data=await responce.data
        console.log(data);
        
        this.setState({
userinfo:data
        })


        console.log();
        
    }
    render(){

        console.log(`child ${this.props.number} render method`);
        
    const {name,city}=this.props
    const {userinfo}=this.state
 
   
    
        return (<>
        
        <h1>Name:{userinfo.name}</h1>
        <p>city:{userinfo.city}</p>

        <p>luck:{this.state.count} %</p>
        <p>badluck: {this.state.count1} %</p>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }}>increase luck</button>
        <button onClick={()=>{
            this.setState({count1:this.state.count1-1})
        }}>decrease badluck</button>
        </>)
    }
}
export default UserClass;