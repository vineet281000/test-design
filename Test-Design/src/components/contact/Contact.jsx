import ContactForm from "./ContactForm"
import ContactDetails from "./ContactDetails"

import '../../styles/contact.css'

function Contact () {
    return(
        <> 
            <div className="contact-page">
                    <div className="form-section">
                      <ContactForm />
                    </div>
                    <div className="detail-section">
                      <ContactDetails />
                    </div>
            </div>
        </>
    )
}

export default Contact