import React from "react";
import RegisterUser from './components/User/RegisterUser';
import LoginUser from './components/User/LoginUser';


const App: React.FC = () => {
  return (
    <div>
      <RegisterUser/>
      <LoginUser/>
    </div>
  );
};

export default App;
