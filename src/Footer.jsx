function Footer() {
    const date = new Date().getFullYear()
    return (
        <footer>
            <p>&copy; {date} Gabe's website</p>
        </footer>
    )
}

export default Footer