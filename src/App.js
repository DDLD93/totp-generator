import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Login from './Login'
import Layout from './Layout';
import Loading from './Loading';





function App() {
  
  const {authReady} = useContext(AuthContext)
 
 

  
  return (
    <>
    {authReady===true && <Layout/> }
    {authReady===null && <Loading/> }
    {authReady===false && <Login/>} 
    </>


  // <div>
  //   {authReady == null && <>
  //     <h2 style={{textAlign:'center'}} >Loading</h2>
  //   </>}
  //   {authReady && <div><Layout/></div>  }
  //   {authReady === false && <Login signin={signin} signup={signup} />}
    
  // </div>
  

  )
}
export default App;
