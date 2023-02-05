import { useState } from 'react'
import Cards from './components/Cards'
import Quiz from './components/Quiz'

export default function MyApp() {
  return (
    <div className="w-full">
      <h1>CAPT OPEN DAY</h1>
      <Cards />
      <Quiz />
    </div>
  );
}