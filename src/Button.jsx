function Button() {
    const handleClick = (e) => e.target.textContent = "Fuck me 🍆🍑💦"

    return (
        <>
        <button onDoubleClick={(e) => handleClick(e)}> Click Me </button>
        </>
    );
}

export default Button