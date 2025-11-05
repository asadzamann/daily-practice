import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './SimpleForm/SimpleForm'
import FormAction from './components/FormAction.jsx/FormAction'
import ControlledField from './ControlledFIeld/ControlledField'
import UncontrolledField from './UncontrolledField/uncontrolledField'
import HookForm from './HookForm/HookForm'
import ProductForm from './ProductForm/ProductForm'
import ProductManagement from './ProductForm/ProductManagement'
import FamilyTree from './FamilyTree/FamilyTree'

function App() {

  return (
    <>

      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
     {/* <ProductManagement></ProductManagement> */}
     <FamilyTree></FamilyTree>
    </>
  )
}

export default App
