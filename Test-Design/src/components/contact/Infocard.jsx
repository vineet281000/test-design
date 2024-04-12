
function Infocard(props){
    const {icon, text, info} = props;


    return (
        <>
            <div className="info-card">
                <div className="icon">
                    <img src={icon} />
                </div>
                <div className="info-card-content">
                    <div className='contact-text'>{text}</div>
                    <div className='contact-info'>{info}</div>
                </div>
            </div>
        </>
    )
}

export default Infocard