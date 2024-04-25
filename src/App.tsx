import React, { useEffect, useState } from 'react';
import Demo1403 from './compoment/demo1403'
import logo from './logo.svg';
import './App.css';
import Demo2103 from './compoment/demo2103';
import LoginCompoment from './compoment/demo2803';
import Test1 from './compoment/demo1104';

function App (){
  

return (
  <div>
     {localStorage.getItem('userName') == 'admin' ?
        <Test1 /> : <LoginCompoment />
      }
  </div>
);
}

export default App;
