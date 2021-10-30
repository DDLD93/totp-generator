import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Loading from './Loading';
import Layout from './Layout';





function App() {
  
  const {authReady} = useContext(AuthContext)
  return (
    <>
      {authReady===null?<Loading/>:<Layout/>}
    </>
  )
}
export default App;
