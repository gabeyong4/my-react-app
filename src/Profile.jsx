function Profile() {
    const imageUrl = "./src/assets/pokeball.png";

    const handleClick = () => console.log("Ouch!");

    return (
        <img onClick={handleClick} src={imageUrl}></img>
    );
}

export default Profile