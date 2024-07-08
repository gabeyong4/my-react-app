function UserGreeting(props) {
    const loggedInVal = <h2 className="loggedin">Welcome {props.username}</h2>

    const loggedOutVal = <h2 className="loggedout">Please login</h2>

    return (
        props.isLoggedIn ?  loggedInVal : loggedOutVal 
    )

}

export default UserGreeting