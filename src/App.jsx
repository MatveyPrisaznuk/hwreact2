// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Greeting/Greeting'
import Message from './components/Message/Message'
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <Title text="Matvey"/>
      <Message newText="Hello World"/>
      <Button buttonText="Some text"/>
    </>
  )
}

export default App
