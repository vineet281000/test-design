import { Icon } from '@iconify/react';

function Infocard(props){
    const {icon, text, info} = props;


    return (
        <>
            <div className="info-card">
                <div className="icon">
                    <Icon icon={icon} width={24}/>
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