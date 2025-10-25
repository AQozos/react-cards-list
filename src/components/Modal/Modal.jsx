import { createPortal } from "react-dom";
import './Modal.css'

const Modal = ({children, onClose}) => {
    return createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;