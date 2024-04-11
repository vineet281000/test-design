import Textbox from "../common/Textbox"
import Select from "../common/Select"
import UploadImage from "../common/UploadImage"

function ContactForm () {
    return(
        <>
            <div className="contactForm">
                <h2> Contattaci </h2>
                <form>
                    <div className="field-row">
                        <div className="field">
                            <Textbox placeholder="Nome"/>
                        </div>
                        <div className="field">
                            <Textbox placeholder="Cognome"/>
                        </div>
                    </div>
                    <div className="field-row">
                        <div className="field">
                            <Textbox placeholder="Email"/>
                        </div>
                        <div className="field">
                            <Textbox placeholder="Telefono"/>
                        </div>
                    </div>

                    <div className="field-select">
                        <Select value="Richiesta Valutazione"/>
                    </div>

                    <textarea rows={10} placeholder="Come possiamo aiutarla?" className="contact-textarea"></textarea>
                    
                    <UploadImage />

                    <button className="contact-message">Invia Messaggio</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm