import Infocard from './Infocard'


function ContactDetails () {
    return(
        <>
            <div className="contact-details">
                <Infocard text="Preferisci usare WhatsApp?" icon="ic:sharp-whatsapp" info="+39 331 9467237"/>
                <Infocard text="Preferisci inviarci una Email?" icon="ic:baseline-alternate-email" info="info@mediartrade.com"/>
            </div>
        </>
    )
}

export default ContactDetails