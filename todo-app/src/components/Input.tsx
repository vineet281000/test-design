import '../styles/Input.css'


function Input(props:{label:string, placeholder:string, value:any}){
    const {label, placeholder, value} = props
    return(
        <>
            <div className="input-field">
                <label>{label}</label>
                <input placeholder={placeholder} value={value} type="text"/>
            </div>
        </>
    )
}


export default Input