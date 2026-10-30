import Welcome from './Welcome';
import Button from './Button';
import { Hello } from './Hello';
import { ContactForm } from './ContractForm';
import { StyleForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';
import './App.css'

function App() {

  return (
    <>
    <CardWrapper title=" User Profile">
      
    </CardWrapper>
    <Greeting name="Bruce" message="Goodmorning" />
     <Greeting name="Clark"/>
      <Greeting message="Welcome"/>
       <Greeting />
    <Product title="Gaming laptop" price={1200} inStock={true} categories={['Electronics', 'Computers', "Gaming"]} />
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
