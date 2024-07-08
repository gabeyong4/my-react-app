import propTypes from 'prop-types'

function List(props) {
    const category = props.category;
    const items = props.items;
    
    items.sort((a,b) => a.name.localeCompare(b.name));
 
    const listItems = items.map(item => 
    <li key={item.id}>{item.name} : {item.calories} </li>);

    return (
        <>
            <h2 className='category-class'>{category}</h2>
            <ol className='listItem-class'> {listItems} </ol>
        </>
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    }))
}


export default List