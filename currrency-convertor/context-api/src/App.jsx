import React from 'react';
import Login from './Component/Login/Login';
import UserContextProvider from './Context/UserContextProvider/UserContextProvider';
import Profile from './Component/Login/profile/Profile';

function App() {
 


  return (
    <UserContextProvider>
      <div>
        <h1>ContextApi Concepts</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
