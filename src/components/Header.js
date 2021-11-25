import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, changeTaskState, addState}) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button changeTaskState={changeTaskState}  label={addState ? 'Close' : 'Add'} color={addState ? 'red' : 'green'}></Button>
        </header>
    )
}

//This will allow default properties
Header.defaultProps = {
    title: 'Default Title'
}

//Specify the prop type
Header.propTypes = {
    title: PropTypes.string,
}

export default Header
