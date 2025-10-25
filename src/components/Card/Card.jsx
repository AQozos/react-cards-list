import './Card.css'
import withModal from '../hoc/withModal';
import Modal from '../Modal/Modal';

const Card = ({card, onOpen, onClose, open}) => {
    return (
        <>
            <div className='card' onClick={onOpen}>
                <img src={card.src} alt={card.name} />
                <p>{card.name}</p>
            </div>
            {open && (
                <Modal onClose={onClose}/>
            )}
        </>
    );
}

export default withModal(Card);