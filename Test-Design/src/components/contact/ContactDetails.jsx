import Infocard from './Infocard'
import whatsappIcon from '../../assets/whatsapp.svg'
import EmailIcon from '../../assets/email.svg'

function ContactDetails () {
    return(
        <>
            <div className="contact-details">
                <Infocard text="Preferisci usare WhatsApp?" icon={whatsappIcon} info="+39 331 9467237"/>
                <Infocard text="Preferisci inviarci una Email?" icon={EmailIcon} info="info@mediartrade.com"/>
            </div>
        </>
    )
}

export default ContactDetails