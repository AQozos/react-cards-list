import { useState } from "react";

const withModal = (Card) => {
    return function WithModal(props) {
        const [modalActive, setModalActive] = useState(false);

        const onClose = () => setModalActive(false);
        const onOpen = () => setModalActive(true);

        return <Card onClose={onClose} onOpen={onOpen} open={modalActive} {...props} />
    }
}

export default withModal;