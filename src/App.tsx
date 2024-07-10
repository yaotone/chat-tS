import React, { useState } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import UserAddInfo from './main/MainHeader/UserAddInfo/UserAddInfo';

function App() {
  const[isUserInfoShown, setIsUserInfoShown] = useState<boolean>(false)

  return (
    <>
      <Sidebar></Sidebar>
      <Main setIsUserInfoShown={setIsUserInfoShown}></Main>
      <UserAddInfo isUserInfoShown = {isUserInfoShown} setIsUserInfoShown={setIsUserInfoShown}></UserAddInfo>
    </>
  );
}

export default App;
