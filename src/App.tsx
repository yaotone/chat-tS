import React, { useState } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import UserAddInfo from './main/MainHeader/UserAddInfo/UserAddInfo';

function App() {
  const[isUserInfoShown, setIsUserInfoShown] = useState<boolean>(false)
  const[activeChat, setActiveChat] = useState<number>(-1); 

  return (
    <>
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat}></Sidebar>
      <Main setIsUserInfoShown={setIsUserInfoShown} activeChat={activeChat} setActiveChat={setActiveChat}></Main>
      <UserAddInfo isUserInfoShown = {isUserInfoShown} setIsUserInfoShown={setIsUserInfoShown}></UserAddInfo>
    </>
  );
}

export default App;
