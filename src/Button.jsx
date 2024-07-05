function Button() {
    const styles = {
        backgroundColor: "hsl(217, 100%, 50%)",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "10px 20px",
        color: 'white',
    }
    return (
        <button style={styles}>Click me</button>
    )
}

export default Button