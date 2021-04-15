import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
        <header className="header">
           <h1>{title}</h1>
           <Button color='blue' text='Add' onClick ={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Blue Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//CSS om JS
//
//    const headingStyle = {
//       color: 'blue', backgroundColor: 'black'
//    }

export default Header