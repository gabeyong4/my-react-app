import Student from './Student.jsx'
import './App.css'

function App() {
  return (
    <>
      <Student name={34}major="Vetinarian Medicine" isDog={true}
      age={1} />
      <Student name="Quinn" major="Hawk Tuah" isDog={true}
      age={24} />
      <Student name="Gabe" major="Backshots" isDog={false} age={25} />
      <Student major="Cocaine" />
    </>
  );
}

export default App
