import List from './List.jsx'
import './App.css'

function App() {
  const fruits = [
    {id:1, name: "apple", calories: 95},
    {id:2, name: "orange", calories: 45},
    {id:3, name: "banana", calories: 105},
    {id:4, name: "coconut", calories: 159},
    {id:5, name: "pineapple", calories: 37},
  ];

  const family = [
    {id:6, name: "quinn", calories: 60},
    {id:7, name: "gabe", calories: 100},
    {id:8, name: "toto", calories: 8 },
    {id:9, name: "coconut", calories: 20},
    {id:10, name: "freddy", calories: 1},
  ];

  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}

    {family.length > 0 && <List items={family} category="Family"></List>}
    </>
  );
}

export default App
