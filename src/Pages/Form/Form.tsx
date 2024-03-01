import './Form.css'

function Form() {
    return (
        <div className="div-form">
            <form>
                <div className='form-element'>
                    <label htmlFor="fname">Nome</label><br />
                    <input className='form-input' type="text" id="fname" name="fname" />
                </div>
                <div className='form-element'>
                    <label htmlFor="femail">Email</label><br />
                    <input className='form-input' type="text" id="femail" name="femail" />
                </div>
                <div className='form-element'>
                    <label htmlFor="fnumber">Telefone</label><br />
                    <input className='form-input' type="number" id="fnumber" name="fnumber" />
                </div>
                <div className='form-element'>
                    <label htmlFor="finteresses">Assuntos de interesse</label><br />
                    <textarea className='form-input form-area' id="finteresses" name="finteresses" rows={5} cols={63} />
                </div>
                <div className='form-element'>
                    <input className='form-button' type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Form