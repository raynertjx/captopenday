import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Quiz from './components/Quiz'
import './App.css'

export default function MyApp() {
  return (
    <div className="w-full">
      <NavBar />
      <Banner />
      <Quiz />
    </div>
  );
}