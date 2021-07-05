import { Context } from "../../components/context"
import { useContext, useState } from "react"
import style from "../../styles/Checkout.module.scss"

const CheckoutForm = () => {

    const{mail, setMail} = useContext( Context )
    const handleMail = ( value ) => {
            setMail({valide: true, content: value})
    }

    return (
        <div className={style.checkoutForm}>
            <div className="oneEm"><h2>Rechnungsdetails</h2><span></span></div>
            <div className={style.form}>
                <div>
                    <label htmlFor="firstname">Vorname</label>
                    <input type="text" name="firstname" readOnly placeholder="Testvorname"/>
                </div>
                <div>
                    <label htmlFor="lastname">Nachname</label>
                    <input type="text" name="lastname" readOnly placeholder="Testnachname"/>
                </div>
            </div>
            <div className={style.form}>
                <div>
                    <label htmlFor="country">Land</label>
                    <input type="text" name="country" readOnly placeholder="Deutschland"/>
                </div>
            </div>
            <div className={style.form}>
                <div>
                    <label htmlFor="postcode">Postleitzahl</label>
                    <input type="text" name="postcode" readOnly placeholder="00000"/>
                </div>
            </div>
            <div className={style.form}>
                <div>
                    <label htmlFor="city">Ort / Stadt</label>
                    <input type="text" name="city" readOnly placeholder="Stadt"/>
                </div>
            </div><div className={style.form}>
                <div>
                    <label htmlFor="mail">E-mail *</label>
                    <input type="text" name="mail" value={mail.content} onChange={(event) => handleMail(event.target.value)}/>
                </div>
            </div>
            <div className={!mail ? style.faileValidation : ""}>
            </div>
            <div className="oneEm"><h2>Anmerkungen</h2><span></span></div>
            <div className="oneEm"><textarea name="textarea" cols="30" rows="10" placeholder="Dies ist nur eine Dummy-Checkoutseite" readOnly></textarea></div>
        </div>
    )
}

export default CheckoutForm