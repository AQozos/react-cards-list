import './Card.css'
import withModal from '../hoc/withModal';
import Modal from '../ui/Modal/Modal';

const Card = ({card, onOpen, onClose, open}) => {
    return (
        <>
            <div className='card' onClick={onOpen}>
                <img src={card.src} alt={card.name} />
                <p>{card.name}</p>
            </div>
            {open && (
                <Modal onClose={onClose}>
                    <div className='card__modal'>
                        <button className='card__modal--btn-close' onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#3a435d">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </button>
                        <img src={card.src} alt={card.name} />
                        <h2>{card.name}</h2>
                        <h3>{card.category}</h3>
                        <p>{card.description}</p>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default withModal(Card);