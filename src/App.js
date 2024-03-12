
import './App.css';
// import Solokolo from './Solokolo';
// import Slider from '@mui/material/Slider';
import Solokolo from './Solokolo';
import PaiChart from './PaiChart';
import React, {useEffect, useState} from 'react';

function App() {
  const [homepay , setHomePay] = useState('1700');
  const [downPay , setDownpay] = useState('600');
  const [loanPay , setLonePay] = useState('300');
  const [pers , serPers] = useState('6');


  useEffect(() =>{
    const a = homepay * 0.25;
    setDownpay(a);
    const b = homepay - downPay;
    setLonePay(b);

  } ,[homepay , downPay , loanPay])
  
  return (
    <div className="App">
    <div className='twoParts'>
        <div className='farstPart'>
          <Solokolo  name = {'HOME VALUE'} min = {1000} max = {10000} simbol = {'$'} setPay = {setHomePay} value = {homepay}  />
          <Solokolo name = {'Down Payment'} min = {0} max = {10000} simbol = {'$'} setPay = {setDownpay}  value = {downPay}/>
          <Solokolo name = {'Loan Amount'} min = {0} max = {10000} simbol = {'$'} setPay = {setLonePay} value = {loanPay}/>
          <Solokolo name = {'Interest Rate'} min = {2} max = {18} simbol = {'%'} setPay = {serPers} value = {pers}/>
        </div>
        <div className='pie'>
          <PaiChart />
        </div>
    </div>
          
    </div>
  );
}

export default App;
