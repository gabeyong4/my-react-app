import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest")
    const changeName = () => {
        setName('ToTo $$$');
    }

    const [age, setAge] = useState(0)
    const incrementAge = () => {
        setAge(age + 1);
    }

    const [employmentStatus, setStatus] = useState(false)
    const toggleStatus = () => {
        setStatus(!employmentStatus);
    }

    return (
        <>
            <div>
                <p>Name: {name} </p>
                <button onClick={changeName}>Set Name</button>
                <p>Age: {age} </p>
                <button onClick={incrementAge}>Increment Age</button>
                <p>Is employed: {employmentStatus ? "Yes" : "No"} </p>
                <button onClick={toggleStatus}>Toggle Status</button>
            </div>
        </>

    )
}

export default MyComponent