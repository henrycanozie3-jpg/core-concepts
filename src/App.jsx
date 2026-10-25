import Welcome from './Welcome'
import Button from './Button'
import { Hello } from './Hello'
import { ContactForm } from './ContractForm'
import { StyleForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile'
import './App.css'

function App() {

  return (
    <>
      <Hello/>
      <StyleForm />
      <Welcome />
      <ContactForm />
      <Button />
    </>
  )
}

export default App
