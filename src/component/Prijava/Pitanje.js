import { useRef } from 'react'
import './Pitanje.css'


const Pitanje = ({ text, error, required, napomena }) => {
    const inputRef = useRef();
    const placeholderRef = useRef();
    const underlineRef = useRef();
    const ovoPoljeJeObaveznoRef = useRef();

    function movePlaceholder() {
        inputRef.current.focus();
        placeholderRef.current.classList.add('placeholderUp');
        underlineRef.current.style.width = "100%";
    }

    function noMoreFocus() {
        if (!inputRef.current.value) {
            placeholderRef.current.classList.remove('placeholderUp')
        }
        underlineRef.current.style.width = "0%";
    }

    return (
        <div className="Pitanje">
            <div ref={placeholderRef} className="fake-placeholder" onClick={movePlaceholder}>{text}<span style={{ fontSize: "0.8rem" }}> {napomena}</span></div>
            <input ref={inputRef} onBlur={noMoreFocus} onFocus={movePlaceholder} />
            <div ref={underlineRef} className="fake-underline"></div>

            {required &&
                <div className="required"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="rgba(66, 189, 222, 1)" strokeWidth="1.4" /><path fill="rgba(66, 189, 222, 1)" d="M9 14h2v2H9z" /><path stroke="rgba(66, 189, 222, 1)" d="M9.5 3v10M10.5 3v10" /></svg></div>
            }

        </div>
    )
}

Pitanje.defaultProps = {
    text: "Pitanje:",
    error: "Ovo polje je obavezno"
}
export default Pitanje