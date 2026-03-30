
import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import DigiModel from './component/DigiModel'

const getModels = async () => {
  const res =  await fetch("/models.json");
  return res.json();
}

function App() {
  const modelPromise = getModels();

  return (
    <>
    <NavBar/>
    <Banner/>
    <Suspense>
      <DigiModel modelPromise={modelPromise}/>
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
