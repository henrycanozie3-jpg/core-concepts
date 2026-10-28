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
    <Welcome name="Bruce" alias="Batman" />
    <Welcome name="Clark" alias="Superman" />
    <Welcome name="Diana" alias="Wonder Woman" />
    <CandidateProfile />
      <Hello/>
      <StyleForm />
      <Welcome />
      <ContactForm />
      <Button />
    </>
  )
}

export default App
