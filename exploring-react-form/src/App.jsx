import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './SimpleForm/SimpleForm'
import FormAction from './components/FormAction.jsx/FormAction'
import ControlledField from '../../react-rounter-learning/ControlledFIeld/ControlledField'

function App() {

  return (
    <>

      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      <ControlledField></ControlledField>

    </>
  )
}

export default App
