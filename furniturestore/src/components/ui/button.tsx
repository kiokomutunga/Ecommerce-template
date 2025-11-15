type ButtonProps = {
    handleclick:()=> void
}

const Button = (props: ButtonProps) =>{
    
    return <button onClick={props.handleclick}>Shop</button>
    
}

export default Button;