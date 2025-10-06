import { Suspense } from 'react'
import './App.css'
import Countries from './Countries/Countries'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(response => response.json())

  return (
    <>
    <Suspense fallback={<h3>Loading all countries...</h3>}>
          <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>

    </>
  )
}

export default App
