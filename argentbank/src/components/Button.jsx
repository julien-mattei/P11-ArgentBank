function Button({classe, onClick, title}) {
    return <button className={classe} onClick={onClick}>
        {title}
    </button>
}
export default Button