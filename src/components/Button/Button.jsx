import './Button.css'

export default function Button({text, clickB, isActive }){
    let className = 'button'
    if (isActive === true){
        className = 'button active'
    }
    return (
        <button className={className } onClick={clickB} >
            {text}
        </button>
	
)}


