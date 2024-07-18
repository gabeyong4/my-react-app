import { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    function decrement() {
        setCount(count-1)
        setCount(count-1)
        setCount(count-1)
    }

    function reset() {
        setCount(0)
        setCount(0)
        setCount(0)
    }

    function increment() {
        setCount(c => c+1)
        setCount(c => c+1)
        setCount(c => c+1)
    }

    function decrement() {
        setCount(c => c-1)
        setCount(c => c-1)
        setCount(c => c-1)
    }

    function reset() {
        setCount(c=> c=0)
        setCount(c=> c=0)
        setCount(c=> c=0)
    }

    // const handleIncrement = (c) => {
    //     setCount(count + 2)
    //     setCount(count + 2)
    //     setCount(count + 2)

    // }

    // const handleDecrement = (c) => {
    //     setCount(count - 2)
    //     setCount(count - 2)
    //     setCount(count - 2)

    // }

    // const handleReset = (c) => {
    //     setCount(0)
    //     setCount(0)
    //     setCount(0)
    // }
    
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default MyComponent;