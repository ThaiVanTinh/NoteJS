import React, { useEffect, useState } from 'react';

function Demo1403 (){
    const [ketqua1, setketqua1] = useState(0);
    const [ketqua2, setketqua2] = useState('');
    const [inputValue, setinputValue] = useState(0);
    const getBinary=(n:number)=>{
      let kq =inputValue.toString(2);
    return kq;
  }
    function handleclick(): void{
      let pow:number = 1;
      for(let i=1;i<=inputValue; i++){
        pow*=inputValue;
    }
    setketqua1(pow);
    setketqua2(getBinary(inputValue))
  }
    return (
      <div>
        <h1 style={{color: 'green'}}>Bài tập React ngày 14-03</h1>
      Nhập vào số tự nhiên:&nbsp;&nbsp;<input type="number" value={inputValue}
      onChange={(e)=>{
        setinputValue(Number(e.currentTarget.value))
    }
    }/>
      <button onClick={handleclick}>Xử Lý</button><br/>

      Kết quả:<br/>
      <p style={{marginLeft:'20px',color:'red'}}>a/Tính giai thừa<br/>Kết quả: {ketqua1}</p>
      <p style={{marginLeft:'20px',color:'blue'}}>b/Tính nhị phân<br/>Kết quả:  {ketqua2}</p>
      <button onClick={()=>{
        localStorage.clear();
        window.location.reload();
      }}>Logout</button>
    </div>
    );
    }
    export default Demo1403;