import { useState } from "react"

function MyComponent() {
    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState()
    const [payment, setPayment] = useState()
    const [shipping, setShipping] = useState('Pick-up')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }
    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    }
    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }

    return (
        <>
            <div>
                <input onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input onChange={handleQuantityChange}/>
                <p>Quantity: {quantity}</p>

                <textarea onChange={handleCommentChange} placeholder="Please enter delivery instructions"></textarea>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Grab">Grab</option>
                </select>
                <p> Payment Method: {payment}</p>

                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>
                <label>
                    <input type="radio" value="Pick-up" checked={shipping === "Pick-up"} onChange={handleShippingChange}/>
                    Pick-up
                </label>
                <p>Shipping: {shipping}</p>
            </div>
        </>
    )
}

export default MyComponent