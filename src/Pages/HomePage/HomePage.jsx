import React  from 'react'
import Navigation from '../../Components/Navbar/Navigation'
import CardsPage from '../Cards/CardsPage'
import MainPage from '../MainPage/MainPage'
import AboutUs from '../AboutPage/AboutUs'


const HomePage = () => {
  
  return (
    <div className="min-h-screen flex flex-col gap-16 dark:bg-slate-800">
      <Navigation/>
      <MainPage/>
      <AboutUs/>
      <CardsPage/>
    </div>
  )
}

export default HomePage