import React from "react";
import RegisterUser from './components/User/LoginUser';
import LoginUser from './components/User/RegisterUser';
import ArticuloManufacturadoABM from "./components/ArticuloManufacturado/ArticuloManufacturadoABM";

const App: React.FC = () => {
  return (
    <div>
      <RegisterUser/>
      <LoginUser/>
      <ArticuloManufacturadoABM/>
    </div>
  );
};

export default App;
