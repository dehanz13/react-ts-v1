import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from "./components/Greet"
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
// import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Status } from "./components/Status"
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Lights } from './components/state/TrafficLights';
import { Counter } from './components/hooks/Counter';
import { useState } from 'react';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "John",
      last: "Doe"
    },
    {
      first: "Jane",
      last: "Doe"
    },
    {
      first: "Will",
      last: "Smith"
    },
  ]
  const trafficLightColorList = [
    {
      id: 0,
      color: 'red',
    },
    {
      id: 1,
      color: 'yellow',
    },
    {
      id: 2,
      color: 'green',
    },
  ]
  const [description, setDescription] = useState('Hooks Demo');
  return (
    <div className="App">
      <ThemeContextProvider>
        <Container styles={{ border: '1px solid black', padding: '3rem', margin: '2rem'}}>
          {/* <Greet name="Danniel" messageCount={10} isLoggedIn={true} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Status status='success' />
          <Oscar>
            <Heading>
              This is a placeholder text!
            </Heading>
          </Oscar>
          <Greet name="Danniel" isLoggedIn={true} />
          <Input value='' handleChange={(event) => {
            console.log(event)
          }}/>
          <Button
            handleClick={(event, id) => {
              console.log("Button Clicked!", event, id)
            }} />
          <User />
          <LoggedIn /> */}
          {/* <Counter />
          <Lights /> */}
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Counter description={description} /> 
        </Container>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
