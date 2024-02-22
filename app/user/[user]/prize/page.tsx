"use client"
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'T-shirt', style: { backgroundColor: '#0F2E46', textColor: '#6CB8DA ' } },
  { option: 'Ingressos', style: { backgroundColor: '#6CB8DA ', textColor:  '#0F2E46' } },
  { option: 'Não foi desta vez', style: { backgroundColor: '#F1803D ', textColor: '#0F2E46' } },
  { option: 'Brinde', style: { backgroundColor: '#F3E04E  ', textColor: '#0F2E46' } },
  { option: 'T-shirt', style: { backgroundColor: '#0F2E46', textColor: '#6CB8DA ' } },
  { option: 'Ingressos', style: { backgroundColor: '#6CB8DA ', textColor:  '#0F2E46' } },
  { option: 'Não foi desta vez', style: { backgroundColor: '#F1803D ', textColor: '#0F2E46' } },
  { option: 'Brinde', style: { backgroundColor: '#F3E04E  ', textColor: '#0F2E46' } },
]

export default function RouletteWhell() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);      
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        outerBorderColor={'#f2f2f2'}
        radiusLineColor={'#f2f2f2'}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}