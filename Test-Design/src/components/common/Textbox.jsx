import '../../styles/common.css'

function Textbox(props) {
    const {placeholder} = props
    return (
        <>
          <input className="input-text" placeholder={placeholder}/>
        </>
    )
}

export default Textbox