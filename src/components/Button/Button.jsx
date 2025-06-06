import classes from './Button.module.css'

export default function Button({text, clickB, isActive }){
    let className = `${classes.button}`
    if (isActive === true){
        className = `${classes.button} ${classes.active}`
    }
    return (
        <button className={className } onClick={clickB} >
            {text}
        </button>
	
)}


