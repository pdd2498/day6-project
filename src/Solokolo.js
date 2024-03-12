import React, {useState} from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }


export default function Solokolo({name , simbol ,value,min , max ,setPay}) {

  // const changeValue = (e)=>{
      
  //     setMoney(e);
  //     console.log(money);
  // }

  return (
    <div>
      <div className='priceValue'>
        <p>{name}</p>
        <h2>{simbol} {value}</h2>
      </div>
        <Slider
        aria-label="Temperature"
        defaultValue={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={min}
        max={max}
        onChange={(e)=>{
          let m = e.target.value;
          setPay(m);
        }}
      />
      <div className='priceFlex'>
        <p>{simbol} {min}</p>
        <p>{simbol} {max}</p>
      </div>
    </div>

  )
}
