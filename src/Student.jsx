import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="profile">
            <p> Name: {props.name} </p>
            <p> Major: {props.major} </p>
            <p> Dog: {props.isDog ? "Yes" : "No"} </p>
            <p> Age: {props.age} </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    major: PropTypes.string,
    isDog: PropTypes.bool,
    age: PropTypes.number
}

Student.defaultProps = {
    name:"Guest",
    major: "BZA",
    isDog: true,
    age: 69
}

export default Student