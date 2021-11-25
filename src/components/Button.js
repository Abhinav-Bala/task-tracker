const Button = ({label, color, changeTaskState}) => {
    return (
        <div>
           <button onClick={changeTaskState} style={{backgroundColor: color}} className='btn'>{label}</button> 
        </div>
    )
}


Button.defaultProps = {
    color: 'black'
}

export default Button
