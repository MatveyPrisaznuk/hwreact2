function Button({buttonText}) {
    return <button onClick={()=> console.log(buttonText)} type="button">Click</button>
}

export default Button