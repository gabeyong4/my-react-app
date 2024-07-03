import profilePic from './assets/profilepic.jpeg'
// import profilePic from './assets/pokeball.png'

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile Pic" />
            <h2 className="card-name">Toto $$$</h2>
            <p className="card-text ">I like to eat and sleep just like my owner quinn yong</p>
        </div>
    )
}

export default Card