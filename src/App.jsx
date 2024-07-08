import UserGreeting from './UserGreeting.jsx'
import './App.css'

function App() {
  return (
    <>
    <UserGreeting isLoggedIn={false} username="totomoney"> </UserGreeting>
    </>
  );
}

export default App
