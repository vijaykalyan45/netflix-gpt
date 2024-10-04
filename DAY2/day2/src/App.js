import logo from './logo.svg';
import './App.css';
import Demo from './Classdemo';
import React from 'react';
import UserClass from './UserClass';
import Parentclass from './Parentclass';
import useFetch from './useFetch';
import useIsUserOnline from './useIsuserOnline';
function App() {

  const data=useFetch()
  const isonline=useIsUserOnline()
if(!isonline){
  return <>
  
  <h1>Oh!.. your internet connection is Gone</h1></>
}
  
  return (
  
    <div className="App">
{/*     
  <Demo  name="first" />
  <Demo  name="second" /> */}
  <Parentclass/>
    </div>  

  );
}

export default App;
