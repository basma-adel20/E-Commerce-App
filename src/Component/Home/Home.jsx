import React, { useContext, useState } from 'react'
import { CounterContext } from '../../Context/CounterContext.js'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx'
export default function Home() {

  let {changeCount}= useContext(CounterContext)
  return <>
  {/* <h2> Home</h2>
  <button onClick={changeCount} className='btn bg-main'>change</button>
   */}
   <FeaturedProducts></FeaturedProducts>
  </>
}
